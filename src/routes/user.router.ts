import express  from "express";
import { createUserSchema } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import { pick } from 'lodash';
import { createUserHandler } from "../controller/user.controller";
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

router.post('/',createUserHandler );

export default router;