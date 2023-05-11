const multer = require('../imageController/blog.imageController')

module.exports = app => {
    const blog = require('../controller/blog.controller');
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/",multer,blog.create);
  
    // Retrieve all blog
    router.get("/", blog.findAll);

    //Retrive blog by id
    router.get("/bId/:bId",blog.findId)
  
    // Update a blog with id
    router.put("/:bId",multer,blog.update);
  
    // Delete a blog with id
    router.delete("/:bId", blog.delete);
    
    // get cid from category
    router.get("/catagory/:cId", blog.category)
    
    app.use('/app/blog', router);
};