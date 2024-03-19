import { photoModel } from "../../../DB/model/photo.model.js"
import { catchError } from "../../middleware/catchError.js"
export const addPhoto = catchError(async(req,res)=>{ 
    const{ createdBy } = req.body 
    await photoModel.insertMany({ path: req.file.filename, createdBy}) 
    res.json({message: "success"})
})

export const getPhoto = catchError(async(req,res)=>{  
    let photos = await photoModel.find()  
    res.json({message: "success", photos})
})

export const voteUp = catchError(async(req,res)=>{  
    const {postId} = req.body;
    let photos = await photoModel.findByIdAndUpdate(postId,
        {  $addToSet: {upIds: [userId]} ,
        $pull: {downIds: [userId]} },
        {new: true})  
    photos.totalVotes = photos.upIds.length - photos.downIds.length
    await photos.save();
    res.json({message: "success", photos})
})

export const voteDown = catchError(async(req,res)=>{  
    const {postId} = req.body;
    let photos = await photoModel.findByIdAndUpdate(postId,
        { $addToSet: {downIds: [userId]} ,
        $pull: {upIds: [userId]} },
        {new: true})  
    photos.totalVotes = photos.upIds.length - photos.downIds.length
    await photos.save();
    res.json({message: "success", photos})
})