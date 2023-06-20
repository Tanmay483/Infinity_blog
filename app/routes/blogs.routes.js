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
      const tCreatedDate = req.body.tCreatedDate;
      const tUpdatedDate = req.body.tUpdatedDate;
    
      // Check if images are provided
      let vBlogFeatureImage = '';
      let vBlogThumbnailImage = '';
    
      if (req.files && req.files.length > 0) {
        vBlogFeatureImage = "http://localhost:8080/" + req.files[0].path.replace(/\\/g, '/');
        vBlogThumbnailImage = "http://localhost:8080/" + req.files[1].path.replace(/\\/g, '/');
      } else {
        if (req.body.url) {
          vBlogFeatureImage = req.body.url;
          vBlogThumbnailImage = req.body.url;
        }
      }
    
      var sql =
        "UPDATE `tbl_blogs` SET `cId`='" +
        cId +
        "',`iParentCatID`='" +
        iParentCatID +
        "',`vBlogTitle`= '" +
        vBlogTitle +
        "',`vBlogTitleSlug`='" +
        vBlogTitleSlug +
        "',`vBlogDescription`='" +
        vBlogDescription +
        "',`tCreatedDate`='" +
        tCreatedDate +
        "',`tUpdatedDate` = '" +
        tUpdatedDate +
        "',`vBlogFeatureImage`='" +
        vBlogFeatureImage +
        "',`vBlogThumbnailImage`='" +
        vBlogThumbnailImage +
        "' WHERE  bId = '" +
        bId +
        "' ";
    
      conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log('blog changed successfully');
        console.log(req.body);
      });
    
      res.send('blog changed successfully');
    });
    
    
      
    // Delete a blog with id
    router.delete('/:bId', blog.delete);

    // get cid from category
    router.get('/description/:bId', blog.description);

    app.use('/app/blog', router);
};
// get blog by title