export type unitTypes =
  | 'milliseconds'
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'years';

export interface IDateProvider {
  compare(startDate: Date, endDate: Date, unit: unitTypes): number;
  compareIfBefore(startDate: Date, endDate: Date): boolean;
  convertToUTC(date: Date): string | Date;
  getCurrentDate(): Date;
  add(value: number, unit: unitTypes): Date;
}
