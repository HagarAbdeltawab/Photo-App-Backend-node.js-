import { AppError } from "../utils/appError.js"

export const validation = (schema)=>{
    return (req,res,next)=>{
        let filter = {};
        if(req.file){
            filter= {path:req.file, ...req.body, ...req.params, ...req.query, ...req.header}
        }else{
            filter= {...req.body, ...req.params, ...req.query, ...req.header}
        }
        
        const { error } = schema.validate(filter, {abortEarly: false})
        if(!error){
            next() 
        }else{
            let errMes =[]
            error.details.forEach(val => {
                errMes.push(val.message)
            });
            next(new AppError(errMes,401))
        }
    }
}