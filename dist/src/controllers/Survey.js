"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Survey = void 0;
const User_1 = require("../constants/User");
const Rank_former_1 = require("../promptFormers/Rank.former");
const Thoughts_former_1 = require("../promptFormers/Thoughts.former");
const Character_former_1 = require("../promptFormers/Character.former");
class Survey {
    constructor(payload, AiSuggest) {
        this.AiSuggest = AiSuggest;
        this.user = User_1.BaseUser;
        this.payload = payload;
    }
    formSuggestionPrompt({ question, answer }) {
        return `based on the question: ${question}, rate this answer: ${answer}`;
    }
    formRankPrompt() {
        return `based on the json bio data: ${JSON.stringify(this.payload.bioData)} and survey answers: bio data: ${JSON.stringify(this.payload.surveyAnswers)}, rank the user`;
    }
    getUserName() {
        return `${this.payload.bioData.firstName} ${this.payload.bioData.lastName}`;
    }
    getAbstracts() {
        return `Age:${this.payload.bioData.age}, Gender:${this.payload.bioData.gender}, Race:${this.payload.bioData.race}`;
    }
    getUserCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            const userCharacter = {};
            Object.keys(this.payload.surveyAnswers).forEach((characterKey) => __awaiter(this, void 0, void 0, function* () {
                userCharacter[characterKey] = yield this.AiSuggest.getSuggestion(this.formSuggestionPrompt(this.payload.surveyAnswers[characterKey]), Character_former_1.CharacterValueForm);
            }));
            return userCharacter;
        });
    }
    getRank() {
        return __awaiter(this, void 0, void 0, function* () {
            const userRank = yield this.AiSuggest.getSuggestion(this.formRankPrompt(), Rank_former_1.RankValueForm);
            return userRank;
        });
    }
    getThoughts() {
        return __awaiter(this, void 0, void 0, function* () {
            const thoughts = yield this.AiSuggest.getSuggestion(this.formRankPrompt(), Thoughts_former_1.ThougthsValueForm);
            return thoughts;
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user.name = this.getUserName();
            this.user.abstracts = this.getAbstracts();
            this.user.character = yield this.getUserCharacter();
            this.user.rank = yield this.getRank();
            this.user.thoughts = yield this.getThoughts();
            return this.user;
        });
    }
}
exports.Survey = Survey;
//# sourceMappingURL=Survey.js.map