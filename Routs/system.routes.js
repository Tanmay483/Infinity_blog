module.exports = app => {
    const system = require('../Controller/system.controller');
  
    var router = require("express").Router();
  
    // Create a new blog
    router.post("/", system.create);
  
    // Retrieve all blog
    router.get("/", system.findAll);  

    //Retrive blog by id
    router.get("/:sId",system.findOne)  
  
    // Update a blog with id
    router.put("/:sId", system.update);
  
    // Delete a blog with id
    router.delete("/:sId", system.delete);  
  
    app.use('/system', router);
};

// system api all done and also checked all working