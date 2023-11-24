const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT ?? 8080,
    API_SERVER_URL:
        process.env?.NODE_ENV === 'production'
            ? process.env.CDM_CLOUD_API_GATEWAY_SERVICE_HOST + ':3415'
            : '192.168.0.246:32715',
};
