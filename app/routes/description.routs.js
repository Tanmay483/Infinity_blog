const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './app/Images/description_img')
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + '.jpg', '.png', '.gif', '.jpeg')
        }
    })
}).single('description_img')



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

    app.use('/description', router);
};

// all done