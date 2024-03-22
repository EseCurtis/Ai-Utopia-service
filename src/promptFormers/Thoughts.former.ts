import { generateExample } from "@/helpers/generateExample";
import { TResponseForm } from "@/types/quantities/TResponseForm";

export const ThougthsValueForm: TResponseForm = {
    prompt: `only a json array of 4 probable single word thoughts to describe ones persona`,
    example: generateExample(`["Cheerful", "Giver", "Dancer", "Food"]`),
    prototyper(value): string[] {
        return (value && Array.from(value)) || [];
    }
}