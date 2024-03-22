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
exports.AiSuggest = void 0;
const AiPrompter_1 = require("./AiPrompter");
const Suggestion_1 = require("../constants/Suggestion");
const cleanJSON_1 = require("../helpers/cleanJSON");
class AiSuggest extends AiPrompter_1.AiPrompter {
    constructor() {
        super(...arguments);
        this.promptNote = `respond according to instructions as this is directly converted to js object with the JSON.stringify() so you need to provide strictly JSON without any errors. Please ensure all decimal numbers are formatted with a leading zero, e.g., 0.7 instead of .7. Please do not include any Markdown formatting in the JSON. Thank you!`;
    }
    formPrompt(question, responseForm) {
        return `
        Hey there, \n
        ${question} \n

        for your reply you have to follow the following criterias:
        response must be; ${responseForm.prompt} \n
        for example: ${responseForm.example} \n

        Note: ${this.promptNote}
        `;
    }
    getSuggestion(question, responseForm) {
        return __awaiter(this, void 0, void 0, function* () {
            const prompt = this.formPrompt(question, responseForm);
            const rawSuggestion = yield this.gen(prompt);
            const cleanedRawSuggestion = (0, cleanJSON_1.cleanJSON)(rawSuggestion);
            let suggestion = Suggestion_1.BaseRawSuggestion;
            try {
                suggestion = JSON.parse(cleanedRawSuggestion);
            }
            catch (error) {
                console.info(error);
                console.log(cleanedRawSuggestion);
            }
            const protoypedSuggestion = responseForm.prototyper(suggestion.value);
            return protoypedSuggestion;
        });
    }
}
exports.AiSuggest = AiSuggest;
//# sourceMappingURL=AiSuggest.js.map