const multer = require('../imageController/blog.imageController');
const conn = require('../config/db');

module.exports = (app) => {
  const blog = require('../controller/blog.controller');

  var router = require('express').Router();

  // Create a new blog
  router.post('/', multer, blog.create);

  // Retrieve all blog
  router.get('/:vCategorySlug?', blog.findAll);

  //Retrive blog by title
  router.get('/title/:vBlogTitleSlug', blog.findId);

  // Update a blog with id
  router.put('/:bId', multer, (req, res) => {
    let bId = req.params.bId;
    const cId = req.body.cId;
    const iParentCatID = req.body.iParentCatID;
    const vBlogTitle = req.body.vBlogTitle;
    const vBlogTitleSlug = req.body.vBlogTitleSlug;
    const vBlogDescription = req.body.vBlogDescription;
    const tCreatedDate = req.body.tCreatedDate;
    const tUpdatedDate = req.body.tUpdatedDate;
    // Retrieve existing image paths from the database
    var sql = "SELECT vBlogFeatureImage, vBlogThumbnailImage FROM `tbl_blogs` WHERE bId = '" + bId + "'";
    conn.query(sql, (err, response) => {
      if (err) throw err;

      let vBlogFeatureImage = '';
      let vBlogThumbnailImage = '';

      // Check if images are provided
      if (req.files && req.files.length > 0) {
        if (req.files[0] && req.files[0].path) {
          vBlogFeatureImage = req.files[0].path.replace(/\\/g, '/');
        }
        if (req.files[1] && req.files[1].path) {
          vBlogThumbnailImage = req.files[1].path.replace(/\\/g, '/');
        }
      }

      // Use existing image paths if not provided in the request
      if (!vBlogFeatureImage) {
        vBlogFeatureImage = response[0].vBlogFeatureImage;
      }
      if (!vBlogThumbnailImage) {
        vBlogThumbnailImage = response[0].vBlogThumbnailImage;
      }

      var sql =
        "UPDATE `tbl_blogs` SET `cId`='" +
        cId +
        "',`iParentCatID`='" +
        iParentCatID +
        "',`vBlogTitle`= '" +
        vBlogTitle +
        "',`vBlogTitleSlug`='" +
        vBlogTitleSlug +
        "',`vBlogDescription`='" +
        vBlogDescription +
        "',`tCreatedDate`='" +
        tCreatedDate +
        "',`tUpdatedDate` = '" +
        tUpdatedDate +
        "',`vBlogFeatureImage`='" +
        vBlogFeatureImage +
        "',`vBlogThumbnailImage`='" +
        vBlogThumbnailImage +
        "' WHERE  bId = '" +
        bId +
        "' ";

      conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log('Blog changed successfully');
        res.status(200).send({
          message: "database updated successfully",
        });
      });
    });
  });

  // Delete a blog with id
  router.delete('/:bId', blog.delete);

  // get cid from category
  router.get('/description/:bId', blog.description);

  app.use('/app/blog', router);
};
// get blog by title