import { AiSuggest } from '@/controllers/AiSuggest';
import { Survey } from '@/controllers/Survey';
import { TPayload } from '@/types/TSurvey';
import express, { Request, Response } from 'express';

// Create a new router instance
const survey = express.Router();

survey.post("/add", async (req: Request, res: Response) => {
    const payload: TPayload = req.body;
    const _Survey = new Survey(payload, new AiSuggest());
    const user = await _Survey.getUser();

    res.status(200).json(user);
});


export default survey;