const express = require('express')
//middleware
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
//connect database
const connectDB = require('./Config/db')

// Routes
const { readdirSync, read } = require('fs')

//Database
connectDB()
const app = express();

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))


// Route (ทำเป็นออโต้)
readdirSync('./Routes')
    .map((r)=> app.use('/api',require('./Routes/'+r)))

app.listen(5000,()=> console.log('Server is running on port 5000'))