const multer = require('multer')

const upload = multer({
    storage : multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,'./app/Images/blog_Image')
        },
        filename: function(req,file,cb){
            cb(null, file.fieldname +"-"+ Date.now()+ '.png','.jpg','.gif','.jpeg')
        }
    })
}).array('b_img',2)

module.exports = upload