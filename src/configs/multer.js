import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file,cb){
    cb(null, './src/public/images')
  },
  filename: function(req, file, cb){
    const filename = Date.now()+'-'+Math.round(Math.random()*1E9)
    cb(null, filename+'-'+file.originalname.replace(" ", ""))
  }
})
const upload = (multer({storage})).single('hinh_anh')
export default upload
