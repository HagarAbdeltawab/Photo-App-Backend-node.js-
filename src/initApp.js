import { globalError } from "./middleware/globalErrorMiddleware.js"
import photoRouter from "./modules/photo/photo.routes.js";
import userRouter from "./modules/user/user.routes.js"
import { AppError } from "./utils/appError.js"
export function initApp(app,express){
    app.use('/users', userRouter); 
    app.use('/photos', photoRouter); 
    app.use('*',(req,res,next)=>{
        next(new AppError(`Not valid: ${req.originalUrl}`,404));
    })
    app.use(globalError);
}