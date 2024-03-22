import { Scales } from "@/dtos/Scales";
import { generateExample } from "@/helpers/generateExample";
import { TResponseForm } from "@/types/quantities/TResponseForm";

export const CharacterValueForm: TResponseForm = {
    prompt: "only one value from these: (0 | 4 | 3 | 2 | 1), 4 being the highest and 0 being the lowest",
    example: generateExample("4"),
    prototyper(value): number {
        return (value && Number(value)) || Scales.MIN;
    }
};
