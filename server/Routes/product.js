const express = require('express')
const router = express.Router()
const { read, list, create, edit, remove } = require('../Controllers/product')

//URL POSTMAN http://localhost:5000/api/product

//list
router.get('/product',list)
//read
router.get('/product/:id',read)
//add
router.post('/product',create)
//edit
router.put('/product/:id',edit)
//remove
router.delete('/product/:id',remove)


module.exports = router