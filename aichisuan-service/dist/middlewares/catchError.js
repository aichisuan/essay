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
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
const HttpException_1 = require("../common/lib/HttpException");
const logs_1 = require("../server/logs");
const catchError = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (error) {
        const isHttpException = error instanceof HttpException_1.HttpException;
        if (!isHttpException) {
            (0, logs_1.errorLog)(ctx, error);
            ctx.body = new HttpException_1.Unknown();
            ctx.status = 500;
        }
        else {
            if (error.responseType)
                ctx.response.type = error.responseType;
            if (error.isBuffer) {
                (0, logs_1.infoLog)(ctx);
                ctx.body = error.data;
            }
            else {
                (0, logs_1.errorLog)(ctx, error);
                ctx.body = {
                    code: 500,
                    errorCode: error.errorCode,
                    message: error.message,
                    request: `${ctx.method} ${ctx.path}`
                };
            }
            ctx.status = error.code;
        }
    }
});
exports.catchError = catchError;
