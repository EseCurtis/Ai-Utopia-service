import { TResponseFormat } from '@/types/TResFormat';
import { Request, NextFunction, Response } from 'express';


// Extend Response interface to include ResponseFormat property
export interface BoundResponse extends Response {
    ResponseFormat: {
        create(statusCode: number, error?: boolean, message?: string, data?: any): void;
        success(message?: string, data?: any): void;
        badRequest(message?: string, data?: any): void;
        unAuthorized(message?: string, data?: any): void;
        forbidden(message?: string, data?: any): void;
        notFound(message?: string, data?: any): void;
        notAllowed(message?: string, data?: any): void;
        requestTimeout(message?: string, data?: any): void;
        internalError(message?: string, data?: any): void;
        badGateway(message?: string, data?: any): void;
        unavailable(message?: string, data?: any): void;
        gatewayTimeout(message?: string, data?: any): void;
    };
}

export const bindResponseFormat = (ResponseFormat: TResponseFormat) => {
    return (req: Request, res: BoundResponse, next: NextFunction) => {
        res.ResponseFormat = {
            create: (statusCode: number, error?: boolean, message?: string, data?: any) => {
                res.status(statusCode).json(ResponseFormat.create(statusCode, error, message, data));
            },
            success: (message?: string, data?: any) => {
                res.status(200).json(ResponseFormat.success(message, data));
            },
            badRequest: (message?: string, data?: any) => {
                res.status(400).json(ResponseFormat.badRequest(message, data));
            },
            unAuthorized: (message?: string, data?: any) => {
                res.status(402).json(ResponseFormat.unAuthorized(message, data));
            },
            forbidden: (message?: string, data?: any) => {
                res.status(403).json(ResponseFormat.forbidden(message, data));
            },
            notFound: (message?: string, data?: any) => {
                res.status(404).json(ResponseFormat.notFound(message, data));
            },
            notAllowed: (message?: string, data?: any) => {
                res.status(405).json(ResponseFormat.notAllowed(message, data));
            },
            requestTimeout: (message?: string, data?: any) => {
                res.status(408).json(ResponseFormat.requestTimeout(message, data));
            },
            internalError: (message?: string, data?: any) => {
                res.status(500).json(ResponseFormat.internalError(message, data));
            },
            badGateway: (message?: string, data?: any) => {
                res.status(502).json(ResponseFormat.badGateway(message, data));
            },
            unavailable: (message?: string, data?: any) => {
                res.status(503).json(ResponseFormat.unavailable(message, data));
            },
            gatewayTimeout: (message?: string, data?: any) => {
                res.status(504).json(ResponseFormat.gatewayTimeout(message, data));
            }
            // Add other methods here following the same pattern
        };
        next();
    };
};

export default bindResponseFormat;
