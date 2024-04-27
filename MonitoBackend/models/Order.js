const mongoose =require("mongoose"); 

const OrderSchema =new mongoose.Schema({
    userId:{type: String,required: true},
    customerID:{type: String,required: true},
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quntity:{type: Number,required: true},
    subtotal:{type: Number,required: true},
    total:{type: Number,required: true},




   
},{timeseries:true});

module.exports=mongoose.model("Order",OrderSchema)