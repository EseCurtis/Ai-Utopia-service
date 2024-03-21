import express, { Request, Response } from 'express';
import userRouter from './api/user.route';
import contentRouter from './api/content.route';
import survey from './api/survey.route';

// Create a new router instance
const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/content", contentRouter);
apiRouter.use("/survey", survey);


export default apiRouter;
