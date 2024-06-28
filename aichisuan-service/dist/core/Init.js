"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../common/utils");
const cors_1 = __importDefault(require("../middlewares/cors"));
const config_1 = __importDefault(require("../config/config"));
const catchError_1 = require("../middlewares/catchError");
const encryMiddler_1 = __importDefault(require("../middlewares/encryMiddler"));
const encFlag_1 = __importDefault(require("../config/encFlag"));
const tcc_1 = __importDefault(require("../common/lib/tcc"));
class Init {
    static initCore(app, server) {
        Init.app = app;
        Init.server = server;
        Init.initCors();
        Init.loadBodyParser();
        Init.initCatchError();
        if (encFlag_1.default) {
            Init.initRsa();
        }
        Init.initLoadRouters();
    }
    // 解析body参数
    static loadBodyParser() {
        Init.app.use((0, koa_bodyparser_1.default)());
    }
    // cors
    static initCors() {
        Init.app.use(cors_1.default);
    }
    // rsa 
    static initRsa() {
        Init.app.use(encryMiddler_1.default);
    }
    // 加载路由
    static initLoadRouters() {
        return __awaiter(this, void 0, void 0, function* () {
            const dirPath = path_1.default.join(`${process.cwd()}/${config_1.default.BASE}/api/`);
            (0, utils_1.getAllFilesExport)(dirPath, (file) => {
                // 有导出并且是router实例
                file.routes && Init.app.use(file.routes());
                file.allowedMethods && Init.app.use(file.allowedMethods());
            });
            // 加密
            Init.app.use(tcc_1.default.routes());
        });
    }
    static initCatchError() {
        return __awaiter(this, void 0, void 0, function* () {
            Init.app.use(catchError_1.catchError);
        });
    }
}
exports.default = Init.initCore;
