const mongoose = require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim: true
    },
    description:{
        type:String,
        required: [true,"Please Enter product Descripation"]
    },
    price: {
        type:Number,
        required: [true,"Please Enter product Price"],
        maxlength: [8,"Price cannot exceed 8"]
    },
    rating: {
        type: Number,
        default:0
    },
    images: [
        {
            public_id: {
                type: String,
                required:true
            },
            url: {
                type: String,
                required:true
            }
        }
    ],
    category:{
        type: String,
        required:[true,"Please Enter product Category"]
    },
    stock:{
        type:Number,
        required:[true,"Please Enter product Stock"],
        maxlength:[4,"Stock cannot exceed 4 characters"],
        default: 1
    },
    noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required: true
            },
            rating:{
                type:Number,
                required: true
            },
            comment:{
                type: String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Product",productSchema);