import Joi from "joi";
export const addPhotoVal = Joi.object({ 
    createdBy: Joi.string().hex().length(24).required(),
    path: Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg','image/png', 'image/jpg').required(),
        size: Joi.number().max(5242880).required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required()
    }).required()
})

export const  IdVal = Joi.object({
    postId: Joi.string().hex().length(24).required(),
    userId: Joi.string().hex().length(24).required(),
})