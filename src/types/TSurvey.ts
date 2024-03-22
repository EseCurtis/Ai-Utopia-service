import { TPersonalityType } from "@/dtos/user/PersonalityTypes"
import { TRank } from "@/dtos/user/Rank"
import { TUser } from "./TUser"

export type TbioData = {
    firstName: string
    lastName: string
    age: string
    gender: string
    race: string
}

export type TAnswer = {
    question: string
    answer: string
}

export type TSurveyAnswers = {
    joy: TAnswer;
    anger: TAnswer;
    sadness: TAnswer;
    excitement: TAnswer;
    calmness: TAnswer;
    confidence: TAnswer;
    fear: TAnswer;
    kindness: TAnswer;
    honesty: TAnswer;
}

export type TPayload = {
    bioData: TbioData,
    surveyAnswers: TSurveyAnswers
}


export type TSurveyResponse = {
    name: TUser["name"];
    personalityType: TPersonalityType;
    rank: TRank;
}