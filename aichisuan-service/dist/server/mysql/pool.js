"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const mysqlConfig_1 = __importDefault(require("./mysqlConfig"));
const pool = mysql_1.default.createPool(mysqlConfig_1.default);
exports.default = pool;
