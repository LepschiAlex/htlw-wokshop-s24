import { NextFunction, Request, Response } from "express";
import { AnyZodObject} from "zod";

export const validate = (schema: AnyZodObject) => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const validated = schema.safeParse({
            params: req.params,
            body: req.body
        });

        console.log("Validated:"+validated);

        if(validated.success){
            Object.assign(
                req,
                validated.data
            );

            next();
        } else {
            res.status(400).json({
                error: "Malformed body"
            })
        }
        
    }
}