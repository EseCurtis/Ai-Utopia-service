import cors from "cors";


const allowedOrigins = ['http://localhost:5173', 'http://example2.com'];

const corsOptions = {
    origin: function (origin: string, callback: (...params: any) => any) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {

            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

export const CorsProtect = () => (cors(corsOptions));
