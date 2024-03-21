import { Scales } from "@/dtos/Scales";
import { Ranks } from "@/dtos/user/Rank";
import { generateExample } from "@/helpers/generateExample";
import { TResponseForm } from "@/types/quantities/TResponseForm";

export const CharacterValueForm: TResponseForm = {
    prompt: "only one value from these: (0 | 4 | 3 | 2 | 1), 4 being the highest and 0 being the lowest",
    example: generateExample("4"),
    prototyper(value): number {
        return (value && Number(value)) || Scales.MIN;
    }
};
export const RankValueForm: TResponseForm = {
    prompt: `only one value from these: (S | A | B | C | D), S being the highest and D being the lowest, keep accuracy at 80-100`,
    example: generateExample("S"),
    prototyper(value): string {
        return (value && String(value)) || Ranks.BISHOP;
    }
};

export const ThougthsValueForm: TResponseForm = {
    prompt: `only a json array of 4 probable single word thoughts to describe ones persona`,
    example: generateExample(`["Cheerful", "Giver", "Dancer", "Food"]`),
    prototyper(value): string[] {
        return (value && Array(value)) || [];
    }
}
