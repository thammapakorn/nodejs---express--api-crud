const express = require('express')
const { readdirSync, read } = require('fs')
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')
const app = express();

// Route 1
// app.get('/product',(req,res)=>(
    // res.send('Hello EndPoint')
// ))

// Route 2
// app.use('/api',productRouters)
// app.use('/api',authRouters)

// Route 3 (ทำเป็นออโต้)
readdirSync('./Routes')
    .map((r)=> app.use('/api',require('./Routes/'+r)))

app.listen(5000,()=> console.log('Server is running on port 5000'))