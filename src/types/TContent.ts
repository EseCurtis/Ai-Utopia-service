import { TScope } from "@/dtos/content/Scopes";
import { TBody } from "./quantities/content/TBody";
import { TUser } from "./TUser";

export type TContent = {
    body: TBody;
    scope: TScope;
    author: TUser;
}

