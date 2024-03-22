import { PersonalityTypes } from "@/dtos/user/PersonalityTypes";
import { Ranks } from "@/dtos/user/Rank";
import { generateExample } from "@/helpers/generateExample";
import { TResponseForm } from "@/types/quantities/TResponseForm";

export const PersonalityTypeForm: TResponseForm = {
    prompt: `use only one personality type from these that fits the user data best (should be different for users): ( "ESTJ" | "ENTJ" | "ESFJ" | "ENFJ" | "ISTJ" | "ISFJ" | "INTJ" | "INFJ" | "ESTP" | "ESFP" | "ENTP" | "ENFP" | "ISTP" | "ISFP" | "INTP" | "INFP")`,
    example: generateExample("ISTJ"),
    prototyper(value): string {
        console.log(value);
        return (value && String(value)) || PersonalityTypes.ISTJ;
    }
};


