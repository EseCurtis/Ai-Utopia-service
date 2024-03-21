interface ResponsePayload {
    statusCode: number;
    error: boolean;
    message: string;
    data: any;
}

export interface TResponseFormat {
    create(statusCode: number, error?: boolean, message?: string, data?: any): ResponsePayload;
    success(message?: string, data?: any): ResponsePayload;
    badRequest(message?: string, data?: any): ResponsePayload;
    unAuthorized(message?: string, data?: any): ResponsePayload;
    forbidden(message?: string, data?: any): ResponsePayload;
    notFound(message?: string, data?: any): ResponsePayload;
    notAllowed(message?: string, data?: any): ResponsePayload;
    requestTimeout(message?: string, data?: any): ResponsePayload;
    internalError(message?: string, data?: any): ResponsePayload;
    badGateway(message?: string, data?: any): ResponsePayload;
    unavailable(message?: string, data?: any): ResponsePayload;
    gatewayTimeout(message?: string, data?: any): ResponsePayload;
}

