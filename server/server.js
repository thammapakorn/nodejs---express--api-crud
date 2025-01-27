const express = require('express')

const app = express();

// Route 1
app.get('/product',(req,res)=>(
    res.send('Hello EndPoint')
))
app.listen(5000,()=> console.log('Server is running on port 5000'))