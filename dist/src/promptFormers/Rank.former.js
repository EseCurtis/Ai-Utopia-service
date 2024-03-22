"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankValueForm = void 0;
const Rank_1 = require("../dtos/user/Rank");
const generateExample_1 = require("../helpers/generateExample");
exports.RankValueForm = {
    prompt: `only one value from these: (S | A | B | C | D), S being the highest and D being the lowest, keep accuracy at 80-100`,
    example: (0, generateExample_1.generateExample)("S"),
    prototyper(value) {
        return (value && String(value)) || Rank_1.Ranks.BISHOP;
    }
};
//# sourceMappingURL=Rank.former.js.map