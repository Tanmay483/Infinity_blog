const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './app/Images/description_img')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + '.jpg', '.png', '.gif', '.jpeg')
        }
    })
}).single('description_img')

module.exports = upload