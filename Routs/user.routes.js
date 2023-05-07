module.exports = app => {
    const user = require('../Controller/user.controller');
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/login", user.create);  //one error app exit it self
  
    // Retrieve all Tutorials
    router.get("/", user.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:uId", user.findOne);
  
    // Update a Tutorial with id
    router.put("/:uId", user.update);
  
    // Delete a Tutorial with id
    router.delete("/:uId", user.delete);
  
    app.use('/api/user', router);
};

// user api all done and also checked all working