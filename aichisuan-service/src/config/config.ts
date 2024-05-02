const isDev = process.env.NODE_ENV === 'development';;

export default class Config {
  public static readonly HTTP_PORT: number = 3000;
  public static readonly API_PREFIX: string = '/api/';
  public static readonly BASE: string = isDev ? 'src' : 'dist';
  public static readonly DEFAULT_DATE_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';
  public static readonly MYSQL = {
    DB_NAME: 'test',
    HOST: '127.0.0.1',
    PORT: 3333,
    USER_NAME: 'admin',
    PASSWARD: 'admin',
    CONNECTTION_LIMIT: 60*60*1000,
    CONNECT_TIMEOUT: 1000 * 60 * 60 * 1000,
    ACQUIRE_TIMEOUT: 60 * 60 * 1000,
    TIMEOUT: 1000 * 60 * 60 * 1000,
  }

  public static readonly REDIS = {
    HOST: '127.0.0.1',  
    PORT: 6379,
    PASSWARD: 'admin',
    DB: 0,
  }
}

