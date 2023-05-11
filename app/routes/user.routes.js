module.exports = app => {
    const user = require('../controller/user.controller');
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/login", user.create);
  
    // Retrieve all Tutorials
    router.get("/", user.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:uId", user.findOne);
  
    // Update a Tutorial with id
    router.put("/:uId", user.update);
  
    // Delete a Tutorial with id
    router.delete("/:uId", user.delete);
  
    app.use('/app/user', router);
};