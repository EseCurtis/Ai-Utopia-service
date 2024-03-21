"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Scales_1 = require("@/dtos/Scales");
const Rank_1 = require("@/dtos/user/Rank");
exports.User = {
    name: "Ese Curtis",
    rank: Rank_1.Ranks.KING,
    character: {
        joy: Scales_1.Scales.MAX,
        anger: Scales_1.Scales.MID,
        sadness: Scales_1.Scales.SUBMAX,
        excitement: Scales_1.Scales.SUBMIN,
        calmness: Scales_1.Scales.SUBMIN,
        confidence: Scales_1.Scales.MID,
        fear: Scales_1.Scales.SUBMAX,
        kindness: Scales_1.Scales.SUBMIN,
        honesty: Scales_1.Scales.MAX,
    },
    thoughts: ["RIches", "Growth", "Matter", "Food", "Piped Out"]
};
