import mongoose, { ObjectId } from "mongoose";
import { Schema, Document, model } from "mongoose";

export type User = {
    username: string;
    email: string;
    password: string;
}

export type UserDocument = Document<ObjectId> & User;

const UserSchema = new Schema<UserDocument>({
    username: { type: String, unique: true, required: true},
    email: { type: String, unique: true, required: true},
    password: {type: String, required: true},
    },
    {
        timestamps:true
    }

);

export const UserModel = model<UserDocument>("User", UserSchema);