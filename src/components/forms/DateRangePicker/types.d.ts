import React from "react";
import { DateRangeProps } from "react-date-range";

export interface IValueKeyDateRange {
  startDate?: Date;
  endDate?: Date;
  key: string;
}

export interface IDateRangePicker extends DateRangeProps  {
  onGetFilters: (data: IValueKeyDateRange | null) => void;
  initState?: IValueKeyDateRange;
  showIconCalendar?: boolean;
  showTimeInputs?: boolean;
  initWithToday?: boolean;
  direction?: "vertical" | "horizontal";
  dateFormatDisplayed?: "simple" | "detailed"
}

export declare const DateRangePicker: (props: IDateRangePicker) => JSX.Element;
