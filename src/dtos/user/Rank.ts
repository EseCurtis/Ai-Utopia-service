export const Ranks = {
    KING: "S",
    QUEEN: "A",
    KNIGHT: "B",
    ROOK: "C",
    BISHOP: "D",
} as const;

export type TRank = typeof Ranks[keyof typeof Ranks];
