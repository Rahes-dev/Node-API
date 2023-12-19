require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: [FRONTEND,'http://example.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/products',productRoute);

    /*
app.get('/',(req,res) => {
    res.send('hello API ')
})

app.get('/item',(req,res) => {
    res.send('hello API , items are displayed ')
})
  */

app.use(errorMiddleware);


mongoose.set("strictQuery",false)
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(PORT , ()=>{
        console.log(`Node api runs ON PORT ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})