"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const http_1 = __importDefault(require("http"));
const Init_1 = __importDefault(require("./core/Init"));
const config_1 = __importDefault(require("./config/config"));
const app = new koa_1.default();
const server = http_1.default.createServer(app.callback());
(0, Init_1.default)(app, server);
app.listen({
    port: config_1.default.HTTP_PORT,
    // 自动使用本机ip
}, () => {
    console.log(`Server is running at http://192.168.0.101:${config_1.default.HTTP_PORT}`);
    console.log(process.env.NODE_ENV);
});
