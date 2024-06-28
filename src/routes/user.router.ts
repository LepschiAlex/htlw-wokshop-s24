import express  from "express";
import { createUserSchema, getUserSchema } from "../schema/user.schema";
import { createUserHandler, getUserHandler } from "../controller/user.controller";
import { validate } from '../middleware/validation';
const router = express.Router();

router.get('/:id',validate(getUserSchema), getUserHandler)

router.post('/',validate(createUserSchema),createUserHandler );

export default router;