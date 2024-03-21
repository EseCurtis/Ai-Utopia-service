import { configDotenv } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

configDotenv();
export const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY);
export const GeminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

