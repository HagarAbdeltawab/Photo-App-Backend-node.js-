import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
    path: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    totalVotes:{
        type:Number,
        default:0
    },
    upIds:[{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    downIds:[{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]
},{timestamps: true})

photoSchema.post('init', function(doc){
    if(doc.path){
        doc.path = process.env.BASE_URL + 'uploads/' + doc.path
    }
})

export const photoModel = mongoose.model('photo',photoSchema)