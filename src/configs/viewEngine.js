<<<<<<< HEAD
import express from 'express'

const configViewEngine= (app)=>{
  app.use(express.static('./src/public/'))
  app.set("view engine", "ejs")
  app.set("views", "./src/views")

}

export default configViewEngine
=======
import express from 'express'

const configViewEngine= (app)=>{
  app.use(express.static('./src/public/'))
  app.set("view engine", "ejs")
  app.set("views", "./src/views")

}

export default configViewEngine
>>>>>>> d00e6f1fa259c455e7414356c24979f1d9d9fd47
