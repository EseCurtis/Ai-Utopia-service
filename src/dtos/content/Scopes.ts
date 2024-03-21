export const Scopes = {
    COMMENT: "/comment",
    POST: "/post",
    REACTION: "/reaction"
}

export type TScope = typeof Scopes[keyof typeof Scopes];