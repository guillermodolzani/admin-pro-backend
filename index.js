const express=require('express')
require('dotenv').config()
const cors=require('cors')

const {dbConnection}=require('./database/config')

//crear el server express

//user 
    //mean_user
//password
    //wRUarkTVd3AMzzee

const app=express()
//Configurar CORS
app.use(cors())

//base de datos
dbConnection()

//rutas
app.get('/',(req,res)=>{
    res.status(400).json(  {
        ok:true,
        msg:'hola mundo'
    })
})

app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo en servidor ' +  process.env.PORT)
})