import { TAnswer, TPayload, TSurveyAnswers } from "@/types/TSurvey";
import { TUser } from "@/types/TUser";
import { AiSuggest } from "./AiSuggest";
import { TCharacter } from "@/types/quantities/user/TCharacter";
import { CharacterValueForm, RankValueForm, ThougthsValueForm } from "@/constants/ResponseForms";
import { TScale } from "@/dtos/Scales";
import { TRank } from "@/dtos/user/Rank";
import { TThoughts } from "@/types/quantities/user/TThought";
import { BaseUser } from "@/constants/User";

export class Survey {
    private payload: TPayload;
    private user: TUser = BaseUser;

    constructor(payload: TPayload, private readonly AiSuggest: AiSuggest) {
        this.payload = payload;
    }

    private formSuggestionPrompt({ question, answer }: TAnswer) {
        return `based on the question: ${question}, rate this answer: ${answer}`;
    }

    private formRankPrompt() {
        return `based on the json bio data: ${JSON.stringify(this.payload.bioData)} and survey answers: bio data: ${JSON.stringify(this.payload.surveyAnswers)}, rank the user`
    }

    private getUserName(): TUser["name"] {
        return `${this.payload.bioData.firstName} ${this.payload.bioData.lastName}`;
    }

    private getAbstracts(): TUser["abstracts"] {
        return `Age:${this.payload.bioData.age}, Gender:${this.payload.bioData.gender}, Race:${this.payload.bioData.race}`;
    }

    private async getUserCharacter(): Promise<TUser["character"]> {
        const userCharacter = {};
        Object.keys(this.payload.surveyAnswers).forEach(async (characterKey: string) => {
            userCharacter[characterKey] = await this.AiSuggest.getSuggestion<TScale>(this.formSuggestionPrompt(this.payload.surveyAnswers[characterKey]), CharacterValueForm)
        });

        return userCharacter as TCharacter;
    }

    private async getRank(): Promise<TUser["rank"]> {
        const userRank = await this.AiSuggest.getSuggestion<TRank>(this.formRankPrompt(), RankValueForm);
        return userRank;
    }

    private async getThoughts(): Promise<TUser["thoughts"]> {
        const thoughts = await this.AiSuggest.getSuggestion<TThoughts>(this.formRankPrompt(), ThougthsValueForm);
        return thoughts;
    }

    public async getUser(): Promise<TUser> {
        this.user.name = this.getUserName();
        this.user.abstracts = this.getAbstracts();
        this.user.character = await this.getUserCharacter();
        this.user.rank = await this.getRank();
        this.user.thoughts = await this.getThoughts();

        return this.user;
    }
}

