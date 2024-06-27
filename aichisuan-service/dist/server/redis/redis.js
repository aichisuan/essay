"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redisConfig_1 = __importDefault(require("./redisConfig"));
const ioredis_1 = __importDefault(require("ioredis"));
exports.default = new ioredis_1.default(redisConfig_1.default);
