require('dotenv').config({path:'./.env'})
const express = require('express')
const app = express()

//db connected
require('./models/database').connectDatabase()

//logger
const logger = require("morgan")
app.use(logger('tiny'))

//bodyparser
app.use(express.json())     //chutiye tu () krna bhool gya fuck u vdt for wastimg my time :(
app.use(express.urlencoded({extended:false}))

//Routes 
app.use('/', require("./routes/indexRoutes"))

//error handling
const ErrorHandler = require("./utils/ErrorHandler")
const {generatedErrors} = require('./middlewares/errors')
app.all("*",(req,res,next) => {
    next(new ErrorHandler(`Requested URL Not Found  ${req.url}`,404))
})
app.use(generatedErrors)



//env
app.listen(
    process.env.PORT, 
    console.log(`server is running on ${process.env.PORT}`)
)