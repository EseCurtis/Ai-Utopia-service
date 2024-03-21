import { Scales } from "@/dtos/Scales";
import { Ranks } from "@/dtos/user/Rank";
import { TUser } from "@/types/TUser";

export const User: TUser = {
    name: "Ese Curtis",
    rank: Ranks.KING,
    character: {
        joy: Scales.MAX,
        anger: Scales.MID,
        sadness: Scales.SUBMAX,
        excitement: Scales.SUBMIN,
        calmness: Scales.SUBMIN,
        confidence: Scales.MID,
        fear: Scales.SUBMAX,
        kindness: Scales.SUBMIN,
        honesty: Scales.MAX,
    },
    thoughts: ["RIches", "Growth", "Matter", "Food", "Piped Out"]
}

export const BaseUser: TUser = {
    name: "",
    rank: Ranks.BISHOP,
    character: {
        joy: Scales.MIN,
        anger: Scales.MIN,
        sadness: Scales.MIN,
        excitement: Scales.MIN,
        calmness: Scales.MIN,
        confidence: Scales.MIN,
        fear: Scales.MIN,
        kindness: Scales.MIN,
        honesty: Scales.MIN,
    },
    thoughts: []
}