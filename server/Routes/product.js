const express = require('express')
const router = express.Router()

//URL POSTMAN http://localhost:5000/api/product
router.get('/product',(req,res)=>{
    res.send('Hello Get Product Endpoint')
})
router.get('/product/:id',(req,res)=>{
    res.send('Hello ID Product Endpoint')
})
router.post('/product',(req,res)=>{
    res.send('Hello POST Product Endpoint')
})
router.put('/product/:id',(req,res)=>{
    res.send('Hello PUT Product Endpoint')
})
router.delete('/product/:id',(req,res)=>{
    res.json({name: 'pream', id: 123})
})
module.exports = router