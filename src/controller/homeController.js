import * as model from '../model/productModel'
const getHomepage = async (req, res) =>{
  let product= await model.showAll();
  res.render('index.ejs', {product, message:null})
}

const createProduct = async (req, res) => {
  try{
    let product={
      ten: req.body.ten,
      mo_ta: req.body.mo_ta,
      gia: req.body.gia,
      hinh_anh: `images/${req.file.filename}`
    }
    let message = await model.createProduct(product)
    res.redirect( '/')
  } catch(err){
    res.send(err)
  }
}
const deleteProduct = async (req, res) =>{
  try{
    let a = await model.deleteProduct(req.params.id)
    res.redirect('/')
  }catch(err){
    res.send(err)
  }
}
const getDetail = async (req, res) => {
  try{
    let product = await model.detailProduct(req.params.id)
    res.render('detail.ejs', {product})
  }catch(err){
    res.send(err)
  }
}
const getUpdatePage = async (req, res) =>{
  try{
    let product = await model.detailProduct(req.params.id)
    res.render('update.ejs', {product})
  } catch(err) { res.send(err) }
}
const updateProduct = async (req, res) => {
  try{
    let product={
      id: req.params.id,
      ten: req.body.ten,
      mo_ta: req.body.mo_ta,
      gia: req.body.gia
    }
    if(req.file) {
      product.hinh_anh =  `images/${req.file.filename}`
    }
    await model.updateproduct(product)
    res.redirect('/')
  }catch(err){res.send(err)}
}
const searchProduct= async (req, res) =>{
  try{
    let product = await model.searchProduct(req.query.txtsearch)
    console.log("san pham ", JSON.stringify(product))
    res.render('index.ejs',{product, message:null})
  }catch(err){res.send("loi me roi")}
}
export {
  getHomepage,
  createProduct,
  deleteProduct,
  getUpdatePage,
  getDetail,
  updateProduct,
  searchProduct
}


