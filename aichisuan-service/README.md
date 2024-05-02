## 文件目录

|-- essay
    |-- README.md
    |-- dfat.text
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- .vscode
    |   |-- launch.json
    |-- dist // 打包输出目录
    |   |-- app.js
    |-- logs // 日志文件
    |   |-- date.-2024-05-18-20.log
    |   |-- date.-2024-05-18-21.log
    |   |-- date.-2024-05-18-22.log
    |-- src // 主要代码区域
        |-- app.ts
        |-- api // api目录
        |   |-- v1
        |   |   |-- test.ts
        |   |-- v2
        |-- common
        |   |-- lib // 业务相关工具类
        |   |   |-- HttpException.ts
        |   |   |-- logs.ts
        |   |-- typings // 公共类型
        |   |   |-- model.d.ts
        |   |-- utils // 非业务相关
        |       |-- index.ts
        |-- config
        |   |-- config.ts // 配置文件
        |-- core // 中心
        |   |-- Init.ts
        |-- middlewares // 中间件
        |   |-- catchError.ts
        |-- server
            |-- logs // 日志配置
            |   |-- index.ts
            |   |-- logger.ts
            |   |-- logsConfig.ts
            |-- mysql // mysql配置
            |   |-- index.ts
            |   |-- mysqlConfig.ts
            |   |-- pool.ts
            |-- redis // redis配置
                |-- index.ts
                |-- redis.ts
                |-- redisConfig.ts
