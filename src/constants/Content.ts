import { Scales } from "@/dtos/Scales";
import { Scopes } from "@/dtos/content/Scopes";
import { Ranks } from "@/dtos/user/Rank";
import { TContent } from "@/types/TContent";
import { User } from "./User";

export const Content: TContent =  {
    body: {
        text: "Test Post",
    },
    scope: Scopes.POST,
    author: User
}