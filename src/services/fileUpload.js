import multer from 'multer';
import {v4 as uuid4} from 'uuid';
import { AppError } from '../utils/appError.js';

export const fileUpload = (fieldName) =>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, uuid4()+'-'+file.fieldname )
        }
    }) 
    function fileFilter (req, file, cb) {
        if(file.mimetype.startsWith('image')){
            cb(null, true);
        }else{
            cb(next(new AppError('Not Valid')), false);
        } 
    } 
    const upload = multer({ storage, fileFilter }) 
    return upload.single(fieldName);
}