"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
const fs_1 = __importDefault(require("fs"));
const index_1 = require("../../common/utils/index");
const logsConfig_1 = __importDefault(require("./logsConfig"));
if (!(0, index_1.isDirectory)('logs')) {
    fs_1.default.mkdirSync('logs');
}
log4js_1.default.configure(logsConfig_1.default);
const logger = log4js_1.default.getLogger('cheese');
exports.default = logger;
