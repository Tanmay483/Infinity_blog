const upload = require('../imageController/description.imageController')

module.exports = app => {
    const Description = require('../controller/description.controller');

    var router = require("express").Router();

    // Create a new Description
    router.post("/", upload, Description.create);

    // Retrieve all Description
    router.get("/", Description.findAll);

    // Retrieve a single Description with id
    router.get("/:abId", Description.findOne);

    // Update a Description with id
    router.put("/:abId", upload, Description.update);

    // Delete a Description with id
    router.delete("/:abId", Description.delete);

    app.use('/app/description', router);
};

// all done