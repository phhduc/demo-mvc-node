import express from 'express'
import upload from '../configs/multer';

import * as homeController from '../controller/homeController';

const router = express.Router()

const initWebRoute= (app) => {
  router.get('/', homeController.getHomepage)
  router.get('/upload', upload, (req, res,next)=>{
    return res.send('OK')
  })
  router.get('/create', (req,res)=>{
    return res.render('create.ejs')
  })
  router.post('/createproduct', upload,homeController.createProduct )
  router.get('/delete/:id', homeController.deleteProduct)
  router.get('/detail/:id', homeController.getDetail)
  router.get('/update/:id', homeController.getUpdatePage)
  router.post('/updateproduct/:id',upload, homeController.updateProduct)
  router.get('/search',homeController.searchProduct)

  return app.use('/', router)
}
export default initWebRoute
