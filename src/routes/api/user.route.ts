import { User } from '@/constants/User';
import express, { Request, Response } from 'express';
import { BoundResponse } from '@/middlewares/bindResponseFormat';
import { UserEntity } from '@/models/user/user.entity';
import { TUser } from '@/types/TUser';

// Create a new router instance
const userRouter = express.Router();

userRouter.get("/all", async (req: Request, res: BoundResponse) => {
    try {
        const _User = new UserEntity();

        _User.getAll()
            .then((users: TUser[]) => {
                res.ResponseFormat.success("Success getting users", users);
            })
            .catch(error => {
                console.info("ERROR::", error)
                res.ResponseFormat.internalError("Unable to create user.")
            })
    } catch (error) {
        console.log("ERROR::", error);
        res.ResponseFormat.internalError("Internal server error.")

    }

    
})

export default userRouter;
