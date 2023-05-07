module.exports = app => {
    const category = require('../Controller/category.controller');
  
    var router = require("express").Router();
  
    // Create a new categories
    router.post("/upload", category.create);//done
  
    // Retrieve all Parent Categories
    router.get("/", category.findAll);  //done

    //Retrive Sub Catagories
    router.get("/iParentCatID/:iParentCatID",category.findParentId)  //done
  
    // Update a Tutorial with id
    router.put("/:cId", category.update);//remain
  
    // Delete a Tutorial with id
    router.delete("/:cId", category.delete);  //done
  
    app.use('/category', router);
};

// remaining only image