const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
      destination: function(req,fille,cb){
        cb(null,"./app/Images/blog_thubnail_Image")
      },
      filename: function(req,file,cb){
        cb(null, file.fieldname +"-"+ Date.now()+ '.png','.jpg','.gif','.jpeg')
      }
    })
  }).single("t_img")

  module.exports = upload