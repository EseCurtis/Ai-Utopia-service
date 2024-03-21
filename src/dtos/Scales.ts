export const Scales = {
    MAX: 4,
    SUBMAX: 3,
    MID: 2,
    SUBMIN: 1,
    MIN: 0,
} as const;

export type TScale = typeof Scales[keyof typeof Scales];
