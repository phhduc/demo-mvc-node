import mysql from 'mysql2/promise'


const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mvc_demo'
})
export default connection
