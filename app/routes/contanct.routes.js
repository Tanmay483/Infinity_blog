module.exports = app => {
    const user = require('../controller/contact.controller');
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.create);
  
    // Retrieve all Tutorials
    router.get("/", user.findAll);

    // delete
    router.delete('/delete/:conId', user.delete);

  
    app.use('/app/contact', router);
};