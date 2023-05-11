const multer = require('multer')

const upload = multer({
    storage : multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,'./app/Images/cat_img')
        },
        filename: function(req,file,cb){
            cb(null, file.fieldname +"-"+ Date.now()+ '.png','.jpg','.gif','.jpeg')
        }
    })
}).single('cat_img')

module.exports = upload