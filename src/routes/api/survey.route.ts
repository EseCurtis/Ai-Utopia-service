import { AiSuggest } from '@/controllers/AiSuggest';
import { Survey } from '@/controllers/Survey';
import { BoundResponse } from '@/middlewares/bindResponseFormat';
import { UserEntity } from '@/models/user/user.entity';
import { TPayload, TSurveyResponse } from '@/types/TSurvey';
import { TUser } from '@/types/TUser';
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
            .then((status: TUser) => {
                //console.info("STATUS::", status)
                const data: TSurveyResponse = {
                    name: status.name,
                    rank: status.rank,
                    personalityType: status.personality
                }

                res.ResponseFormat.success("Created user successfully.", data)
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