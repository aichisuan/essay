import fs from 'fs';
import path from 'path';
import Config from '../../config/config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

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
