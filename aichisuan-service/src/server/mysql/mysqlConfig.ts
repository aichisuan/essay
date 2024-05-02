import Config from "../../config/config";

export default {
  host: Config.MYSQL.HOST,
  port: Config.MYSQL.PORT,
  user: Config.MYSQL.USER_NAME,
  passward: Config.MYSQL.PASSWARD,
  database: Config.MYSQL.DB_NAME,
  multipleStatements: true, // 允许多条sql同时执行
  connectionLimit: Config.MYSQL.CONNECTTION_LIMIT,
  connectTimeout: Config.MYSQL.CONNECT_TIMEOUT,
  acquireTimeout: Config.MYSQL.ACQUIRE_TIMEOUT, // 获取连接超时时间
  timeout: Config.MYSQL.TIMEOUT, // 连接超时时间
}