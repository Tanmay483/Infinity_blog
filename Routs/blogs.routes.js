module.exports = app => {
    const blog = require('../Controller/blog.controller');
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/", blog.create);
  
    // Retrieve all blog
    router.get("/", blog.findAll);  

    //Retrive blog by id
    router.get("/:bId",blog.findId)  
  
    // Update a blog with id
    router.put("/:bId", blog.update);
  
    // Delete a blog with id
    router.delete("/:bId", blog.delete);
    
    // get cid from category
    router.get("/catagory/:cId",blog.findcId)
  
    app.use('/blog', router);
};
//all spne