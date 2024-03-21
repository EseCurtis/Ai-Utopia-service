import { Content } from '@/constants/Content';
import express, { Request, Response } from 'express';

// Create a new router instance
const contentRouter = express.Router();

contentRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json(Content);
})

export default contentRouter;