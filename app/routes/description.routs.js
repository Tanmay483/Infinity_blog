const upload = require('../imageController/description.imageController')
const conn = require('../config/db');
const path = require('path');

module.exports = app => {
    const Description = require('../controller/description.controller');

    var router = require("express").Router();

    // Create a new Description
    router.post("/", upload, Description.create);

    // Retrieve all Description
    router.get("/", Description.findAll);

    // Retrieve a single Description with id
    router.get("/:bId", Description.findOne);


    router.put('/:abId', upload, (req, res) => {
        let query = `UPDATE tbl_additional_blogs_desc SET bId=?,vBlogDescription=?,tCreatedDate=?,tUpdatedDate=?,Mode=?`
        const queryParams = [
            bId = req.body.bId,
            vBlogDescription = req.body.vBlogDescription,
            tCreatedDate = req.body.tCreatedDate,
            tUpdatedDate = req.body.tUpdatedDate, 
            Mode = req.body.mode,
        ]
        if (req.file) {
            query += ", vBlogImage=?";
            queryParams.push(vBlogImage = req.file.path.replace(/\\/g, '/'));
        }
        query += " WHERE abId = ?";
        queryParams.push( abId = req.params.abId);
        conn.query(query, queryParams, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                res.status(200).send({
                    message: "database updated successfully",
                  });
            }
        })
    })


    // Delete a Description with id
    router.delete('/:bId', Description.delete);


    app.use('/app/description', router);
};