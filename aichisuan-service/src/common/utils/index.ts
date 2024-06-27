import fs from 'fs';
import path from 'path';
import Config from '../../config/config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import os from 'os';

dayjs.locale('zh-cn');

// 文件默认导出

export const getAllFilesExport = async (filePath: string, cb: Function) => {
  const files:string[] = fs.readdirSync(filePath);

  files.forEach((filename) => {
    const absFilePath = path.resolve(filePath, filename);
    const stats: fs.Stats = fs.statSync(absFilePath);
    if (stats.isDirectory()) {
      getAllFilesExport(absFilePath, cb);
    } else {
      const file = require(absFilePath)
      cb(file.default);
    }
  })

}

export const isDirectory = (path: string) =>  {
  try {
    return fs.statSync(path).isDirectory()
  }catch(e) {
    return false
  }
}

// 下划线转驼峰
export const toHump = (name: string) => {
  return name.replace(/\_(\w)/g, function(all, letter){
    return letter.toUpperCase();
  });
}

// 驼峰转下划线
export const toLine = (name: string) => {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}

// 将对象的所有属性由下划线转换成驼峰
export const toHumpObj = (obj: object): object => {
  if (obj instanceof Array) {
    return obj.map((item) => {
      return toHumpObj(item);
    })
  } else if (obj instanceof Object) {
    const newObj: Record<string, unknown> = {}; // Explicitly define the type of newObj
    for (let key in obj) {
      // @ts-ignore
      newObj[toHump(key)] = obj[key];
    }
    return newObj;
  } else {
    return obj;
  }
}

// 将对象的所有属性由驼峰转换成下划线
export const toLineObj = (obj: object): object => {
  if (obj instanceof Array) {
    return obj.map((item) => {
      return toLineObj(item);
    })
  } else if (obj instanceof Object) {
    const newObj: Record<string, unknown> = {}; // Explicitly define the type of newObj
    for (let key in obj) {
      // @ts-ignore
      newObj[toLine(key)] = obj[key];
    }
    return newObj;
  } else {
    return obj;
  }
}

dayjs.extend(utc); // Extend dayjs with the 'utc' plugin

// format时间
export const formatTime = (time: string | number | Date, format: string = Config.DEFAULT_DATE_FORMAT) => {
  return dayjs.utc(time).format(format);
}

export const formatTimeQuery = (time: string | number | Date, isEnd:boolean = false, format: string = Config.DEFAULT_DATE_QUERY) => {
  if (isEnd) {
    return dayjs.utc(time).endOf('day').format(format);
  }
  return dayjs.utc(time).startOf('day').format(format);
};

// 格式化查询参数 
//

const intQuerys = ['id', 'comment_id', 'article_id', 'status', 'parent_comment_id', 'is_admin'];
const emptyValue = [null, undefined, '']

export const formatQuery = (query: any) => {
  const newQuery = {...query};
  for (let key in newQuery) {
    if (newQuery[key] === '') {
      delete newQuery[key];
    }
    if (newQuery[key] === 'null') {
      delete newQuery[key]
    }

    if (!emptyValue.includes(newQuery[key]) && intQuerys.includes(key)) {
      newQuery[key] = +newQuery[key];
    }
  }
  return newQuery;
}



// 提取包含关键字的内容片段
export const extractContentSnippet = (content: string, keyword: string, snippetLength: number = 60): string => {
  const startIndex = content.toLowerCase().indexOf(keyword.toLowerCase());
  if (startIndex === -1) {
    return content.slice(0, snippetLength) + '...'; // 如果没有找到关键字，返回内容的开始部分
  }
  const start = Math.max(0, startIndex - Math.floor(snippetLength / 2));
  const end = Math.min(content.length, startIndex + keyword.length + Math.floor(snippetLength / 2));
  return (start > 0 ? '...' : '') + content.slice(start, end) + (end < content.length ? '...' : '');
}

export const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
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
}