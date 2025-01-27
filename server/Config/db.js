const mongoose = require('mongoose')

const connectDB =  async()=>{
    try {
        //คำสั่งในการเชื่อมต่อ database ใน (path)/ ตามด้วยชื่อ database
        await mongoose.connect('mongodb://localhost:27017/product')
        console.log('DB Connected')
    } catch (error) {
        console.log(err)
    }
}

module.exports = connectDB