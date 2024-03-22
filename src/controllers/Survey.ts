import { TAnswer, TPayload, TSurveyAnswers } from "@/types/TSurvey";
import { TUser } from "@/types/TUser";
import { AiSuggest } from "./AiSuggest";
import { TCharacter } from "@/types/quantities/user/TCharacter";
import { TScale } from "@/dtos/Scales";
import { TRank } from "@/dtos/user/Rank";
import { TThoughts } from "@/types/quantities/user/TThought";
import { BaseUser } from "@/constants/User";
import { RankValueForm } from "@/promptFormers/Rank.former";
import { ThougthsValueForm } from "@/promptFormers/Thoughts.former";
import { CharacterValueForm } from "@/promptFormers/Character.former";
import { TPersonalityType } from "@/dtos/user/PersonalityTypes";
import { PersonalityTypeForm } from "@/promptFormers/PersonalityType.former";

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

    private formThoughtsPrompt() {
        return `based on the json bio data: ${JSON.stringify(this.payload.bioData)} and survey answers: bio data: ${JSON.stringify(this.payload.surveyAnswers)}, get thoughts for the user`
    }

    private formPersonalityTypePrompt() {
        return `based on the json user data: ${JSON.stringify(this.user)}, get the best MBTI personality type that fits the user description.`
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
        const thoughts = await this.AiSuggest.getSuggestion<TThoughts>(this.formThoughtsPrompt(), ThougthsValueForm);
        return thoughts;
    }

    private async getPersonalityType(): Promise<TUser["personality"]> {
        const personalityType = await this.AiSuggest.getSuggestion<TPersonalityType>(this.formPersonalityTypePrompt(), PersonalityTypeForm);
        return personalityType;
    }


    public async getUser(): Promise<TUser> {
        this.user.name = this.getUserName();
        this.user.abstracts = this.getAbstracts();
        this.user.character = await this.getUserCharacter();
        this.user.rank = await this.getRank();
        this.user.thoughts = await this.getThoughts();
        this.user.personality = await this.getPersonalityType();

        return this.user;
    }
    
}

