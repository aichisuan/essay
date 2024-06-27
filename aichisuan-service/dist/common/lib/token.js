"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshVerifyToken = exports.verifyToken = exports.addToken = exports.tokenConfig = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.tokenConfig = {
    secret: 'token',
    refreshTokenSecret: 'refreshToken',
    tokenLife: 60 * 60,
    refreshTokenLife: 60 * 60 * 24,
};
const addToken = (userId, secret, time = 60 * 60 * 24) => {
    return jsonwebtoken_1.default.sign({ userId }, secret, { expiresIn: time });
};
exports.addToken = addToken;
const verifyToken = (token, secret) => {
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        return false;
    }
};
exports.verifyToken = verifyToken;
const refreshVerifyToken = (token, secret, time = 60 * 60 * 24) => {
    const { userId } = (0, exports.verifyToken)(token, secret) || {};
    if (!userId)
        return false;
    try {
        (0, exports.addToken)(userId, exports.tokenConfig.secret, exports.tokenConfig.tokenLife);
        (0, exports.addToken)(userId, exports.tokenConfig.refreshTokenSecret, exports.tokenConfig.refreshTokenLife);
        return true;
    }
    catch (error) {
        throw new Error('refresh token error');
        return false;
    }
};
exports.refreshVerifyToken = refreshVerifyToken;
