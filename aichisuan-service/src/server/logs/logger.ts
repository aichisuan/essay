import log4js from "log4js";
import fs from 'fs';
import { isDirectory } from '../../common/utils/index';
import logsConfig from "./logsConfig";

if (!isDirectory('logs')) {
  fs.mkdirSync('logs');
}

log4js.configure(logsConfig);

const logger = log4js.getLogger('cheese');

export default logger;