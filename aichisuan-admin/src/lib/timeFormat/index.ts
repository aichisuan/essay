import dayjs, { Dayjs } from "dayjs"
import utc from 'dayjs/plugin/utc';

dayjs.locale('zh-cn');

dayjs.extend(utc);

export const formatTime = (time: Dayjs, formatSrt: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  return dayjs.utc(time).format(formatSrt)
}


export const formatTimeDayjs = (time: Dayjs): Dayjs => dayjs.utc(time);