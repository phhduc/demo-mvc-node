import connection from '../configs/connectDB'
import fs from 'fs'
const showAll = async ()=>{
  try{
    let [rows] = await connection.execute(
      'select * from product order by id desc '
    )
    return rows
  }catch{
    throw new Error('không thể lấy danh sách sản phẩm')
  }
}
const createProduct= async (product) => {
  try{
    let [rows] = await connection.execute(
    `insert into product (ten, mo_ta, hinh_anh, gia) values (?,?,?,?)`,
      [product.ten, product.mo_ta, product.hinh_anh,product.gia]
    )
    return "thên sản phẩm mới thành công";
  }catch(err){
    console.log(err)
  }
}
const detailProduct= async (productId)=>{
  try{
    let [rows] = await connection.execute(
      'select * from product where id=?',
      [productId]
    )
    return rows[0]
  } catch{
    throw new Error(' không tìm thấy sản phẩm')
  }
}
const deleteProduct=async (productId) =>{
  try{
    let [rows] = await connection.execute(
    'select hinh_anh from product where id=?', [productId]
    )
    fs.unlinkSync(`./src/public/${rows[0].hinh_anh}`)
    await connection.execute(
      'delete from product where id=?',
      [productId]
    )
    return "sản phẩm đã xóa"
  }catch{
    throw new Error(`xóa sản phẩm không thành công`)
  }
}
const updateproduct = async (product) => {
  try{
    await connection.execute(
    `update product set ten=?, mo_ta=?, gia=? where id=?`,
      [product.ten,product.mo_ta,product.gia,product.id]
    )
    if(product.hinh_anh){
      await connection.execute(
      'update product set hinh_anh=? where id=?',
        [product.hinh_anh, product.id]
      )
    }
    return "sản phẩm đã được cập nhật"
  } catch{
    throw new Error("không thể sửa sản phẩm này")
  }
}
const searchProduct= async (txtSearch) => {
  try{
    let sqlstring = `select * from product where ten like '%${txtSearch}%' order by id desc`

    let [rows] =await connection.execute(
      sqlstring
    )
    return rows
  } catch (err){
    throw new Error(err)
  }
}
export {
  createProduct,
  detailProduct,
  deleteProduct,
  updateproduct,
  searchProduct,
  showAll
}
