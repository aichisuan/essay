"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config/config"));
exports.default = {
    host: config_1.default.REDIS.HOST,
    port: config_1.default.REDIS.PORT,
    passward: config_1.default.REDIS.PASSWARD,
    db: config_1.default.REDIS.DB,
};
