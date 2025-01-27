exports.read = async(req,res)=>{
    res.send('Hello Controller Read')
}

exports.list = async(req,res)=>{
    try{
        res.send('Hello list')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res)=>{
    try{
        res.send('Hello Add')
    }catch{
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.edit = async(req,res)=>{
    try {
        res.send('Hello Edit')
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