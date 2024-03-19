import express from "express";
import { addPhoto, getPhoto, voteDown, voteUp } from "./photo.controller.js";
import { fileUpload } from "../../services/fileUpload.js";
import { validation } from "../../middleware/validation.js";
import { IdVal, addPhotoVal } from "./photo.validation.js";
const photoRouter = express.Router() 
photoRouter.post('/', fileUpload('path'),validation(addPhotoVal), addPhoto)
photoRouter.get('/', getPhoto)
photoRouter.post('/up', validation(IdVal), voteUp)
photoRouter.post('/down',validation(IdVal), voteDown)
export default photoRouter;