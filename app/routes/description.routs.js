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
        let abId = req.params.abId
        const bId = req.body.bId;
        const vBlogDescription = req.body.vBlogDescription;
        const vBlogImage = "http://localhost:8080/" + req.file.path.replace(/\\/g, '/');
        const tCreatedDate = req.body.tCreatedDate;
        const tUpdatedDate = req.body.tUpdatedDate;

        var sql = "UPDATE `tbl_additional_blogs_desc` SET `bId`='" + bId + "',`vBlogDescription`='" + vBlogDescription + "', `vBlogImage`='" + vBlogImage + "',`tCreatedDate`='" + tCreatedDate + "',`tUpdatedDate`='" + tUpdatedDate + "' WHERE `abId` = '" + abId + "' ";
        
        conn.query(sql, (err, data) => {
            if (err) throw err;
            console.log('Description cahnge scessfully')
            console.log(vBlogImage)
        })
        res.send("Description cahnge scessfully")
    })

    

    // Delete a Description with id
    router.delete("/:abId", Description.delete);

    app.use('/app/description', router);
};