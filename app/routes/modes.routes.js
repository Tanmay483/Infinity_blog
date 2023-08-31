module.exports = app => {
    const mode = require('../controller/modes.controller');
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", mode.findAll);
  
    // Retrieve with id
    router.get("/:Id", mode.findOne);

    //insert
    router.post('/',mode.create)

    //update
    router.put('/update/:Id', mode.update)

    //delete
    router.delete('/delete/:Id', mode.delete)
  
    app.use('/app/mode', router);
};