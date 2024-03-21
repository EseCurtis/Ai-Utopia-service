import { TResponseForm } from "@/types/quantities/TResponseForm";
import { AiPrompter } from "./AiPrompter";
import { TSuggestion } from "@/types/quantities/aiSuggest/TSuggestion";
import { BaseRawSuggestion } from "@/constants/Suggestion";
import { cleanJSON } from "@/helpers/cleanJSON";

export class AiSuggest extends AiPrompter {
    private promptNote = `respond according to instructions as this is directly converted to js object with the JSON.stringify() so you need to provide strictly JSON without any errors. Please ensure all decimal numbers are formatted with a leading zero, e.g., 0.7 instead of .7. Please do not include any Markdown formatting in the JSON. Thank you!`;
    
    private formPrompt(question: string, responseForm: TResponseForm) {
        return `
        Hey there, \n
        ${question} \n

        for your reply you have to follow the following criterias:
        response must be; ${responseForm.prompt} \n
        for example: ${responseForm.example} \n

        Note: ${this.promptNote}
        `
    }
    async getSuggestion<T>(question: string, responseForm: TResponseForm): Promise<T> {
        const prompt = this.formPrompt(question, responseForm);
        const rawSuggestion = await this.gen(prompt);
        const cleanedRawSuggestion = cleanJSON(rawSuggestion);
        let suggestion: TSuggestion = BaseRawSuggestion;
        try {
            suggestion = JSON.parse(cleanedRawSuggestion);
        } catch (error) {
            console.info(error);
            console.log(cleanedRawSuggestion);
        }
        const protoypedSuggestion = responseForm.prototyper(suggestion.value);

        return protoypedSuggestion as T;
    }
}