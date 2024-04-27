const mongoose =require("mongoose"); 
const Products = require("./Products");

const CartSchema =new mongoose.Schema({
    userId:{type: String,required: true},
    products:[{
        cartItem:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            default:1
        }
    }],


   
},{timeseries:true});

module.exports=mongoose.model("Cart",CartSchema)