import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { injectable } from 'tsyringe';

import {
  unitTypes,
  IDateProvider,
} from '@infra/providers/DateProvider/IDateProvider';

@injectable()
export class DayJsDateProvider implements IDateProvider {
  constructor() {
    dayjs.extend(utc);
  }

  compare(startDate: Date, endDate: Date, unit: unitTypes): number {
    const startDateUTC = this.convertToUTC(startDate);
    const endDateUTC = this.convertToUTC(endDate);
    return dayjs(endDateUTC).diff(startDateUTC, unit);
  }

  compareIfBefore(startDate: Date, endDate: Date): boolean {
    return dayjs(endDate).isBefore(startDate);
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  getCurrentDate(): Date {
    return dayjs().toDate();
  }

  add(value: number, unit: unitTypes): Date {
    return dayjs().add(value, unit).toDate();
  }
}
