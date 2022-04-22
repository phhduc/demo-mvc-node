import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

import initWebRoute from './router/web'
import connection from './configs/connectDB'

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

configViewEngine(app)
initWebRoute(app)

app.listen(port, ()=>{
  console.log("running on port " + port)
})
