"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    appenders: {
        console: {
            type: 'console',
        },
        date: {
            type: 'dateFile',
            filename: 'logs/date',
            category: 'normal',
            alwaysIncludePattern: true,
            pattern: '-yyyy-MM-dd-hh.log',
        },
    },
    categories: {
        default: {
            appenders: ['console', 'date'],
            level: 'info',
        },
    },
};
