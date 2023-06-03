const upload = require('../imageController/catageory.image.controller')
const conn = require('../config/db')
module.exports = app => {
    const category = require('../controller/category.controller');
  
    var router = require("express").Router();
  
    // Create a new categories
    router.post("/upload",upload, category.create);

    // Retrieve all Parent Categories
    router.get("/", category.findAll);  

    //Retrive Sub Catagories
    router.get("/iParentCatID/:iParentCatID",category.findParentId)  
  
    // Update a Tutorial with id
    router.put("/update/:cId", upload, (req, res) => {

        let cId = req.params.cId
        const vCategoryName = req.body.vCategoryName;
        const vCategorySlug = req.body.vCategorySlug;
        const iParentCatID = req.body.iParentCatID
        const tCreatedDate = req.body.tCreatedDate
        const tUpdatedDate = req.body.tUpdatedDate
        const filename = "http://localhost:8080/" + req.file.path.replace(/\\/g, '/');
    
        var sql = "UPDATE `tbl_categories` SET `vCategoryName`=('" + vCategoryName + "'),`vCategorySlug`=('" + vCategorySlug + "'),`vCategoryImage`= ('" + filename + "'),`iParentCatID` = ('" + iParentCatID + "'),`tCreatedDate`=('" + tCreatedDate + "'),`tUpdatedDate`=('" + tUpdatedDate + "')WHERE  cId = ('" + cId + "')"
        conn.query(sql, (err, data) => {
            if (err) throw err;
            console.log("category change sucessfully")
        });
        res.send("category change sucessfully")
    })
    
    // Delete a Tutorial with id
    router.delete("/:cId", category.delete);  

    // get sub cstegory
    router.get("/subcat",category.subAll)
     
    app.use('/app/category', router);
};