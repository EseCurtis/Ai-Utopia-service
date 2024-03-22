import { AiSuggest } from '@/controllers/AiSuggest';
import { Survey } from '@/controllers/Survey';
import { BoundResponse } from '@/middlewares/bindResponseFormat';
import { UserEntity } from '@/models/user/user.entity';
import { TPayload } from '@/types/TSurvey';
import express, { Request, Response } from 'express';

// Create a new router instance
const survey = express.Router();


survey.post("/add", async (req: Request, res: BoundResponse) => {
    try {
        const payload: TPayload = req.body;
        const _Survey = new Survey(payload, new AiSuggest());
        const _User = new UserEntity();
        const user = await _Survey.getUser();

        _User.create(user)
            .then((status) => {
                console.info("STATUS::", status)
                res.ResponseFormat.success("Created user successfully.")
            })
            .catch((error) => {
                console.info("ERROR::", error)
                res.ResponseFormat.internalError("Unable to create user.")
            });
    } catch (error) {
        console.log("ERROR::", error);
        res.ResponseFormat.internalError("Internal server error.")
    }
});


export default survey;