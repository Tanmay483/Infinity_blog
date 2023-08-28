module.exports = app => {
    const mode = require('../controller/modes.controller');
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", mode.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:Id", mode.findOne);
  
    app.use('/app/mode', router);
};