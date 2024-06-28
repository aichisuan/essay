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
exports.getAesKey = exports.getPrivateKey = void 0;
// 加密解密
const koa_router_1 = __importDefault(require("koa-router"));
const config_1 = __importDefault(require("../../config/config"));
const node_rsa_1 = __importDefault(require("node-rsa"));
const encrypt_1 = require("./encrypt");
const router = new koa_router_1.default({
    prefix: `${config_1.default.API_PREFIX}v1`,
});
const key_rsa = new node_rsa_1.default({ b: 1024 });
key_rsa.setOptions({ encryptionScheme: 'pkcs1' }); //指定加密格式.不改格式得话可能会报错
const publickey = key_rsa.exportKey('public');
const privatekey = key_rsa.exportKey('private');
router.get('/pc/tcc', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = (0, encrypt_1.encryptAes)(publickey);
}));
const getPrivateKey = () => {
    return privatekey;
};
exports.getPrivateKey = getPrivateKey;
const getAesKey = (autoKey) => {
    return key_rsa.decrypt(autoKey, 'utf8');
};
exports.getAesKey = getAesKey;
exports.default = router;
