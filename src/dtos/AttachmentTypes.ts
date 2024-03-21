export const AttachmentTypes = {
    IMAGE: "img",
    VIDEO: "vid",
    AUDIO: "aud"
} as const;

export type TAttachmentType = typeof AttachmentTypes[keyof typeof AttachmentTypes];