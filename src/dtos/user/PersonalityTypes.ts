export const PersonalityTypes = {
    ESTJ: "ESTJ",
    ENTJ: "ENTJ",
    ESFJ: "ESFJ",
    ENFJ: "ENFJ",
    ISTJ: "ISTJ",
    ISFJ: "ISFJ",
    INTJ: "INTJ",
    INFJ: "INFJ",
    ESTP: "ESTP",
    ESFP: "ESFP",
    ENTP: "ENTP",
    ENFP: "ENFP",
    ISTP: "ISTP",
    ISFP: "ISFP",
    INTP: "INTP",
    INFP: "INFP",
} as const;

export type TPersonalityType = typeof PersonalityTypes[keyof typeof PersonalityTypes];
