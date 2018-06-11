const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file)
      cb(null, './images/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + '.png')
    }
})
   
const upload = multer({storage: storage})

module.exports = upload;