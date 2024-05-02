import logger from "./logger";
import { Models } from "../../common/typings/model";

// 记录信息日志
export const infoLog = (ctx: Models.Ctx) => {
  const { method, response, originalUrl, ip, status } = ctx;
  logger.info(`[${method}] ${originalUrl} ${status} ${response.length} - ${ip}`);
}

// 记录错误日志
export const errorLog = (ctx: Models.Ctx, error: Error) => {
  const { method, originalUrl, ip } = ctx;
  logger.error(`[${method}] ${originalUrl} - ${ip} - ${error}`);
}


