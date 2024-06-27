"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt_1 = require("./encrypt");
const getClientIp = (ctx) => {
    return ctx.request.headers['x-real-ip'] || ctx.request.headers['x-forwarded-for'] || ctx.request.ip;
};
function getIpd(ctx) {
    const ip = getClientIp(ctx);
    return (0, encrypt_1.encrypt)(ip, process.env.passphrase);
}
exports.default = getIpd;
