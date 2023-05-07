module.exports = app => {
    const blog = require('../Controller/blog.controller');
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/", blog.create);//done
  
    // Retrieve all blog
    router.get("/", blog.findAll);  //done

    //Retrive blog by id
    router.get("/:bId",blog.findId)  //done
  
    // Update a blog with id
    router.put("/:bId", blog.update);//done
  
    // Delete a blog with id
    router.delete("/:bId", blog.delete);  //done
  
    app.use('/blog', router);
};
//all spne