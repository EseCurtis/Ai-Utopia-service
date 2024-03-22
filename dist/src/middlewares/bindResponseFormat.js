"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindResponseFormat = void 0;
const bindResponseFormat = (ResponseFormat) => {
    return (req, res, next) => {
        res.ResponseFormat = {
            create: (statusCode, error, message, data) => {
                res.status(statusCode).json(ResponseFormat.create(statusCode, error, message, data));
            },
            success: (message, data) => {
                res.status(200).json(ResponseFormat.success(message, data));
            },
            badRequest: (message, data) => {
                res.status(400).json(ResponseFormat.badRequest(message, data));
            },
            unAuthorized: (message, data) => {
                res.status(402).json(ResponseFormat.unAuthorized(message, data));
            },
            forbidden: (message, data) => {
                res.status(403).json(ResponseFormat.forbidden(message, data));
            },
            notFound: (message, data) => {
                res.status(404).json(ResponseFormat.notFound(message, data));
            },
            notAllowed: (message, data) => {
                res.status(405).json(ResponseFormat.notAllowed(message, data));
            },
            requestTimeout: (message, data) => {
                res.status(408).json(ResponseFormat.requestTimeout(message, data));
            },
            internalError: (message, data) => {
                res.status(500).json(ResponseFormat.internalError(message, data));
            },
            badGateway: (message, data) => {
                res.status(502).json(ResponseFormat.badGateway(message, data));
            },
            unavailable: (message, data) => {
                res.status(503).json(ResponseFormat.unavailable(message, data));
            },
            gatewayTimeout: (message, data) => {
                res.status(504).json(ResponseFormat.gatewayTimeout(message, data));
            }
            // Add other methods here following the same pattern
        };
        next();
    };
};
exports.bindResponseFormat = bindResponseFormat;
exports.default = exports.bindResponseFormat;
//# sourceMappingURL=bindResponseFormat.js.map