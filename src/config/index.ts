import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT ?? 8080,
    API_SERVER_URL:
        process.env?.NODE_ENV === 'production'
            ? process.env.CDM_CLOUD_API_GATEWAY_SERVICE_HOST + ':3415'
            : '192.168.0.241:32715',
};
