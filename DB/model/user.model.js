import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age:{
        type: Number,
        min: [10,'young age'],
        max: [80,'old age']
    },
    role:{
        type: String,
        enum: ['user' ,'admin'],
        default: 'user'
    },
    verifyEmail:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
},{timestamps: true})

export const userModel = mongoose.model('user',userSchema)