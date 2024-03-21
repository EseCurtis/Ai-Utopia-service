import { User } from '@/constants/User';
import express, { Request, Response } from 'express';
import { BoundResponse } from '@/middlewares/bindResponseFormat';

// Create a new router instance
const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: BoundResponse) => {
    res.ResponseFormat.success("Success getting user", User);
})

export default userRouter;
