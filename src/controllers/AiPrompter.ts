import { GeminiModel } from "@/resources/GeminiModel";

export class AiPrompter {
    constructor() { }

    async gen(prompt: string): Promise<string> {
        const result = await GeminiModel.generateContent(prompt);
        const response = await result.response;
        return response.text();
    }
}