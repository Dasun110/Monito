const express = require('express')
const dotenv =require("dotenv");
const mongoose =require("mongoose"); 
const app = express()
const productRouter = require('./routes/products')
const authRouter =require('./routes/auth')
const userRouter =require('./routes/user')
const cartRouter =require('./routes/cart')


dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected")).catch((err)=>console.log(err))

app.get('/',(req,res)=>res.send('hi'));
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}))

app.use('/api/products', productRouter)
app.use('/api/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/cart', cartRouter)


 
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))