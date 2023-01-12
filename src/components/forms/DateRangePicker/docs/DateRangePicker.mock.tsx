/* eslint-disable no-console */
import { IDateRangePicker } from "../types";

const defaultDateRangePicker: IDateRangePicker = {
  onGetFilters: (data) => console.log("data", data),
  initState: undefined,
  showIconCalendar: true,
  showTimeInputs: true,
  initWithToday: false,
  direction: "horizontal",
  // dateDisplayFormat: "detailed",
};

export const mockDateRangePickerProps = {
  defaultDateRangePicker,
};
