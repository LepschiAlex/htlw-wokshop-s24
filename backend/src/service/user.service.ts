import { User, UserModel } from "../model/user.model"

export async function createUser(
    user: User
){
    try{
        const userDocument = await UserModel.create(user);

        console.log("{User Service | Create User} - Successfully create user with id: " + userDocument._id);

        return userDocument;
    } catch(e){
        console.error(e);
        throw e;
    }

    
}

export async function getUser(
    id: string
){
    try{
            const user = await UserModel.findById(id);
            if (!user){
                throw new Error(`Could not find user with id ${id}`);
            }
            return user;
    } catch(e){
        console.error(`{User Service | Get User} - Error getting user ${id}`);
        throw e;
    }
}