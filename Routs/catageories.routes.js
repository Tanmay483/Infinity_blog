const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
      destination: function(req,fille,cb){
        cb(null,"./Images/cat_img")
      },
      filename: function(req,file,cb){
        cb(null, file.filename +"-"+ Date.now()+ '.png','.jpg','.gif','.jpeg')
      }
    })
  }).single("cat_img")


module.exports = app => {
    const category = require('../Controller/category.controller');
  
    var router = require("express").Router();
  
    // Create a new categories
    router.post("/upload",upload, category.create);//done
  
    // Retrieve all Parent Categories
    router.get("/", category.findAll);  //done

    //Retrive Sub Catagories
    router.get("/iParentCatID/:iParentCatID",category.findParentId)  //done
  
    // Update a Tutorial with id
    router.put("/:cId",upload, category.update);//remain
  
    // Delete a Tutorial with id
    router.delete("/:cId", category.delete);  //done
  
    app.use('/category', router);
};
// remaining only image