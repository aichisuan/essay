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
exports.selectDb = exports.redisCatch = void 0;
const redis_1 = __importDefault(require("./redis"));
const HttpException_1 = require("../../common/lib/HttpException");
const redisCatch = (err) => {
    throw new HttpException_1.DataBaseFailed(err.message);
};
exports.redisCatch = redisCatch;
const selectDb = (db) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        redis_1.default.select(db, (err) => {
            if (err)
                reject(err);
            resolve(true);
        });
    }).catch(exports.redisCatch);
});
exports.selectDb = selectDb;
