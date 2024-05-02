import Config from "../../config/config";

export default {
  host: Config.REDIS.HOST,
  port: Config.REDIS.PORT,
  passward: Config.REDIS.PASSWARD,
  db: Config.REDIS.DB,
}