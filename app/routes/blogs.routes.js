const multer = require('../imageController/blog.imageController');
const conn = require('../config/db');

module.exports = (app) => {
    const blog = require('../controller/blog.controller');

    var router = require('express').Router();

    // Create a new blog
    router.post('/', multer, blog.create);

    // Retrieve all blog
    router.get('/', blog.findAll);

    //Retrive blog by title
    router.get('/title/:vBlogTitleSlug', blog.findId);

    // Update a blog with id
    router.put('/:bId', multer, (req, res) => {
        let bId = req.params.bId;
        const cId = req.body.cId;
        const iParentCatID = req.body.iParentCatID;
        const vBlogTitle = req.body.vBlogTitle;
        const vBlogTitleSlug = req.body.vBlogTitleSlug;
        const vBlogDescription = req.body.vBlogDescription;
        const vBlogFeatureImage = 'hello';
        const vBlogThumbnailImage = 'hello';
        const tCreatedDate = req.body.tCreatedDate;
        const tUpdatedDate = req.body.tUpdatedDate;


        var sql =
            "UPDATE `tbl_blogs` SET `cId`='" +
            cId +
            "',`iParentCatID`='" +
            iParentCatID +
            "',`vBlogTitle`= '" +
            vBlogTitle +
            "',`vBlogTitleSlug`='"+
            vBlogTitleSlug+
            "',`vBlogDescription`='" +
            vBlogDescription +
            "',`vBlogFeatureImage`='" +
            vBlogFeatureImage +
            "',`vBlogThumbnailImage`='" +
            vBlogThumbnailImage +
            "',`tCreatedDate`='" +
            tCreatedDate +
            "',`tUpdatedDate` = '" +
            tUpdatedDate +
            "'WHERE  bId = '" +
            bId +
            "' ";
        conn.query(sql, (err, data) => {
            if (err) throw err;
            console.log('blog change sucessfully');
            console.log(req.body);
        });
        res.send('blog change sucessfully');
    });

    // Delete a blog with id
    router.delete('/:bId', blog.delete);

    // get cid from category
    router.get('/catagory/:cId', blog.category);

    app.use('/app/blog', router);
};
// get blog by title