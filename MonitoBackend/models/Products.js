const mongoose =require("mongoose"); 

const ProductSchema =new mongoose.Schema({
    imageUrl:{type:String ,required:true},
    title:{type:String ,required:true},
    gender:{type:String ,required:true},
    age:{type:String ,required:true},
    price:{type:String ,required:true},
    sku:{type:String ,required:true},
    size:{type:String ,required:true},
    colour:{type:String ,required:true},
    vaccinated:{type:String ,required:true},
    dewormed:{type:String ,required:true},
    cert:{type:String ,required:true},
    microchip:{type:String ,required:true},
    location:{type:String ,required:true},
    publishedDate:{type:String ,required:true},
    additionalInformation:{type:String ,required:true},
},{timeseries:true});

module.exports=mongoose.model("Product",ProductSchema)