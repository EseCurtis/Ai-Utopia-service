import { Ranks } from "@/dtos/user/Rank";
import { generateExample } from "@/helpers/generateExample";
import { TResponseForm } from "@/types/quantities/TResponseForm";

export const RankValueForm: TResponseForm = {
    prompt: `only one value from these: (S | A | B | C | D), S being the highest and D being the lowest, keep accuracy at 80-100`,
    example: generateExample("S"),
    prototyper(value): string {
        return (value && String(value)) || Ranks.BISHOP;
    }
};


