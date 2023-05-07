module.exports = app => {
    const Description = require('../Controller/description.controller');
  
    var router = require("express").Router();
  
    // Create a new Description
    router.post("/", Description.create);
  
    // Retrieve all Description
    router.get("/", Description.findAll);
  
    // Retrieve a single Description with id
    router.get("/:abId", Description.findOne);
  
    // Update a Description with id
    router.put("/:abId", Description.update);
  
    // Delete a Description with id
    router.delete("/:abId", Description.delete);
  
    app.use('/description', router);
};

// all done