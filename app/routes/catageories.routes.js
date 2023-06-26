const upload = require('../imageController/catageory.image.controller')
const conn = require('../config/db');
const { response } = require('express');
module.exports = app => {
  const category = require('../controller/category.controller');

  var router = require("express").Router();

  // Create a new categories
  router.post("/upload", upload, category.create);

  // Retrieve all Parent Categories
  router.get("/", category.findAll);

  //Retrive Sub Catagories
  router.get("/iParentCatID/:iParentCatID", category.findParentId)

  // Update a Tutorial with id
  router.put('/update/:cId', upload, (req, res) => {
    const cId = req.params.cId;
    const vCategoryName = req.body.vCategoryName;
    const vCategorySlug = req.body.vCategorySlug;
    const iParentCatID = req.body.iParentCatID;
    const tCreatedDate = req.body.tCreatedDate;
    const tUpdatedDate = req.body.tUpdatedDate;

    var sql = "SELECT vCategoryImage FROM `tbl_categories` WHERE cId = " + cId + "";

    conn.query(sql, (err, response) => {
      if (err) throw err;

      let filename = '';

      if (req.file && req.file.path) {
        filename = "http://localhost:8080/" + req.file.path.replace(/\\/g, '/');
        console.log(filename);
      }
      if (!filename) {
        filename = response[0].vCategoryImage;
      }

      const updateSql = `UPDATE tbl_categories SET vCategoryName = ?, vCategorySlug = ?, vCategoryImage = ?, iParentCatID = ?, tCreatedDate = ?, tUpdatedDate = ? WHERE cId = ?`;
      const params = [vCategoryName, vCategorySlug, filename, iParentCatID, tCreatedDate, tUpdatedDate, cId];

      conn.query(updateSql, params, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('An error occurred while updating the category.');
        } else {
          console.log('Category changed successfully');
          res.send('Category changed successfully');
        }
      });
    })
  });
  // Delete a Tutorial with id
  router.delete("/:cId", category.delete);

  // get sub cstegory
  router.get("/subcat", category.subAll)

  // get cid from category
  router.get('/subcategory', category.description);

  app.use('/app/category', router);
};