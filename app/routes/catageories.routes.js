const upload = require('../imageController/catageory.image.controller')
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
    router.put("/:cId",upload, category.update)
  
    // Delete a Tutorial with id
    router.delete("/:cId", category.delete);  
  
    app.use('/category', router);
};