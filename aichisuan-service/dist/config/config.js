"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isDev = process.env.NODE_ENV === 'development';
;
class Config {
}
Config.HTTP_PORT = 3000;
Config.API_PREFIX = '/';
Config.BASE = isDev ? 'src' : 'dist';
Config.DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
Config.DEFAULT_DATE_QUERY = 'YYYY-MM-DDTHH:mm:ss.sssZ';
Config.MYSQL = {
    DB_NAME: 'test',
    HOST: '127.0.0.1',
    PORT: 3333,
    USER_NAME: 'admin',
    PASSWARD: 'admin',
    CONNECTTION_LIMIT: 60 * 60 * 1000,
    CONNECT_TIMEOUT: 1000 * 60 * 60 * 1000,
    ACQUIRE_TIMEOUT: 60 * 60 * 1000,
    TIMEOUT: 1000 * 60 * 60 * 1000,
};
Config.REDIS = {
    HOST: '127.0.0.1',
    PORT: 6379,
    PASSWARD: 'admin',
    DB: 0,
};
exports.default = Config;
