import { TRank } from "@/dtos/user/Rank";
import { TCharacter } from "./quantities/user/TCharacter";
import { TThoughts } from "./quantities/user/TThought";

export type TUser = {
    name: string;
    rank: TRank;
    character: TCharacter;
    thoughts: TThoughts;
    abstracts?: string;
}

type openUser = {
    name: string;
    rank: "S" | "A" | "B" | "C" | "D";
    character: {
        joy: 0 | 4 | 3 | 2 | 1
        anger: 0 | 4 | 3 | 2 | 1
        sadness: 0 | 4 | 3 | 2 | 1
        excitement: 0 | 4 | 3 | 2 | 1
        calmness: 0 | 4 | 3 | 2 | 1
        confidence: 0 | 4 | 3 | 2 | 1
        fear: 0 | 4 | 3 | 2 | 1
        kindness: 0 | 4 | 3 | 2 | 1
        honesty: 0 | 4 | 3 | 2 | 1
    };
    thoughts: [];
    abstracts?: string;
}
