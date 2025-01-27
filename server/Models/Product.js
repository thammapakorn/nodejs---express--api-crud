const mongoose = require('mongoose')

//สร้าง field
const productSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    price: {
        type: Number
    }
},{ timestamps : true})

//products = ชื่อตาราง
module.exports =  mongoose.model('products', productSchema)