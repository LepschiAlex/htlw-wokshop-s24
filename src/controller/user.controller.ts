import { Request, Response } from "express";

import { createUserSchema } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import { pick } from 'lodash';

export async function createUserHandler(req: Request, res: Response){
    const validated = createUserSchema.safeParse(req.body);

    console.log(validated);

    if(validated.success){
        try{
            const user = await UserModel.create(validated.data);

            return res.status(200).json(pick(user, "username", "email", "_id"));
        }catch(e){
            console.log(e);
            return res.status(400).send(e);
        }
        


    }
    else{
        res.status(400).json({
            error: "Malformed request body du trotl"
        })
    }


    console.log(req.body);
}