import { TAttachment } from "../TAttachment";

export type TBody = {
    text: string;
    attachments?: TAttachment[];
}