const Product = require('../Models/Product')


exports.read = async(req,res)=>{
    try {
        //สร้างตัวแปร id เก็บข้อมูล id ใน table
        const id = req.params.id
        //model Product ใช้คำสั่ง find ทั้งหมด = {}
        const producted = await Product.findOne({_id: id}).exec();
        res.send(producted)
    } catch (error) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async(req,res)=>{
    try{
        //model Product ใช้คำสั่ง find ทั้งหมด = {}
        const producted = await Product.find({}).exec();
        res.send(producted)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res)=>{
    try{
        console.log(req.body)
        //model Product ถ้าชื่อตรงกันใส่ req.body ไปได้เลย และสั่งsave
        const producted = await Product(req.body).save()
        //ส่งข้อมูลไปให้หน้าบ้านด้วย
        res.send(producted)
    }catch{
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.edit = async(req,res)=>{
    try {
        const id = req.params.id
        //การ edit ข้อมูล นอกจากจะต้องส่ง id มาแล้ว ต้องส่งข้อมูลใหม่ที่ต้องการ update มาให้ด้วย
        const edited = await Product
        .findOneAndUpdate({_id:id},req.body, {new: true})
        .exec();
        res.send(edited)
    } catch (error) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req,res)=>{
    try {
        res.send('Hello Remove')
    } catch (error) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}