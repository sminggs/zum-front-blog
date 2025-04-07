import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export class DateFormatter {
  static init() {
    dayjs.locale('ko');
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Seoul');
  }

  static formatUnixTimestamp(unixTimestamp: number, format: string = 'MM.DD'): string {
    return dayjs
      .unix(unixTimestamp / 1000)
      .tz('Asia/Seoul')
      .format(format);
  }

  static getCurrentDate(format: string = 'YYYY-MM-DD'): string {
    return dayjs().tz('Asia/Seoul').format(format);
  }

  static getDaysBetween(date1: Date, date2: Date): number {
    return dayjs(date2).diff(dayjs(date1), 'day');
  }
}

DateFormatter.init();
