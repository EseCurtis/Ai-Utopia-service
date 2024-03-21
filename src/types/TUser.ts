import { TRank } from "@/dtos/user/Rank";
import { TCharacter } from "./quantities/user/TCharacter";
import { TThoughts } from "./quantities/user/TThought";
import { TScale } from "@/dtos/Scales";

export type TUser = {
    name: string;
    rank: TRank;
    character: TCharacter;
    thoughts: TThoughts;
    abstracts?: string;
}
