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
exports.getLocalIP = exports.extractContentSnippet = exports.formatQuery = exports.formatTimeQuery = exports.formatTime = exports.toLineObj = exports.toHumpObj = exports.toLine = exports.toHump = exports.isDirectory = exports.getAllFilesExport = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../../config/config"));
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const os_1 = __importDefault(require("os"));
dayjs_1.default.locale('zh-cn');
// 文件默认导出
const getAllFilesExport = (filePath, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const files = fs_1.default.readdirSync(filePath);
    files.forEach((filename) => {
        const absFilePath = path_1.default.resolve(filePath, filename);
        const stats = fs_1.default.statSync(absFilePath);
        if (stats.isDirectory()) {
            (0, exports.getAllFilesExport)(absFilePath, cb);
        }
        else {
            const file = require(absFilePath);
            cb(file.default);
        }
    });
});
exports.getAllFilesExport = getAllFilesExport;
const isDirectory = (path) => {
    try {
        return fs_1.default.statSync(path).isDirectory();
    }
    catch (e) {
        return false;
    }
};
exports.isDirectory = isDirectory;
// 下划线转驼峰
const toHump = (name) => {
    return name.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
};
exports.toHump = toHump;
// 驼峰转下划线
const toLine = (name) => {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
};
exports.toLine = toLine;
// 将对象的所有属性由下划线转换成驼峰
const toHumpObj = (obj) => {
    if (obj instanceof Array) {
        return obj.map((item) => {
            return (0, exports.toHumpObj)(item);
        });
    }
    else if (obj instanceof Object) {
        const newObj = {}; // Explicitly define the type of newObj
        for (let key in obj) {
            // @ts-ignore
            newObj[(0, exports.toHump)(key)] = obj[key];
        }
        return newObj;
    }
    else {
        return obj;
    }
};
exports.toHumpObj = toHumpObj;
// 将对象的所有属性由驼峰转换成下划线
const toLineObj = (obj) => {
    if (obj instanceof Array) {
        return obj.map((item) => {
            return (0, exports.toLineObj)(item);
        });
    }
    else if (obj instanceof Object) {
        const newObj = {}; // Explicitly define the type of newObj
        for (let key in obj) {
            // @ts-ignore
            newObj[(0, exports.toLine)(key)] = obj[key];
        }
        return newObj;
    }
    else {
        return obj;
    }
};
exports.toLineObj = toLineObj;
dayjs_1.default.extend(utc_1.default); // Extend dayjs with the 'utc' plugin
// format时间
const formatTime = (time, format = config_1.default.DEFAULT_DATE_FORMAT) => {
    return dayjs_1.default.utc(time).format(format);
};
exports.formatTime = formatTime;
const formatTimeQuery = (time, isEnd = false, format = config_1.default.DEFAULT_DATE_QUERY) => {
    if (isEnd) {
        return dayjs_1.default.utc(time).endOf('day').format(format);
    }
    return dayjs_1.default.utc(time).startOf('day').format(format);
};
exports.formatTimeQuery = formatTimeQuery;
// 格式化查询参数 
//
const intQuerys = ['id', 'comment_id', 'article_id', 'status', 'parent_comment_id', 'is_admin'];
const emptyValue = [null, undefined, ''];
const formatQuery = (query) => {
    const newQuery = Object.assign({}, query);
    for (let key in newQuery) {
        if (newQuery[key] === '') {
            delete newQuery[key];
        }
        if (newQuery[key] === 'null') {
            delete newQuery[key];
        }
        if (!emptyValue.includes(newQuery[key]) && intQuerys.includes(key)) {
            newQuery[key] = +newQuery[key];
        }
    }
    return newQuery;
};
exports.formatQuery = formatQuery;
// 提取包含关键字的内容片段
const extractContentSnippet = (content, keyword, snippetLength = 60) => {
    const startIndex = content.toLowerCase().indexOf(keyword.toLowerCase());
    if (startIndex === -1) {
        return content.slice(0, snippetLength) + '...'; // 如果没有找到关键字，返回内容的开始部分
    }
    const start = Math.max(0, startIndex - Math.floor(snippetLength / 2));
    const end = Math.min(content.length, startIndex + keyword.length + Math.floor(snippetLength / 2));
    return (start > 0 ? '...' : '') + content.slice(start, end) + (end < content.length ? '...' : '');
};
exports.extractContentSnippet = extractContentSnippet;
const getLocalIP = () => {
    const interfaces = os_1.default.networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; iface && i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return 'localhost';
};
exports.getLocalIP = getLocalIP;
