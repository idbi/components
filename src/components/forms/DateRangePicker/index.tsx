/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { IconCalendar } from "@/icons/IconCalendar";
import { DateRange } from "react-date-range";
import { Text } from "@/components/Typography";
import { Button } from "@/components/Button";
import type { IDateRangePicker, IValueKeyDateRange } from "./types";
import * as s from "./styles";

export const DateRangePicker: React.FC<IDateRangePicker> = ({
  onGetFilters,
  initState,
  showIconCalendar = true,
  showTimeInputs = false,
  direction = "horizontal",
  dateFormatDisplayed = "detailed",
  initWithToday = false,
  ...rest
}) => {
  const ref = useRef<any>(null);
  const [time, setTime] = useState({ from: "00:00", to: "23:59" });
  const [active, setActive] = useState<boolean>(false);
  const [state, setState] = useState<IValueKeyDateRange[]>(
    initState
      ? [initState]
      : [
          {
            startDate: initWithToday ? new Date(Date.now()) : undefined,
            endDate: initWithToday ? new Date(Date.now()) : undefined,
            key: "selection",
          },
        ]
  );

  const formattedToShowInFilter = (filter: "from" | "to") => {
    if (state?.length > 0 && state[0]?.startDate && state[0]?.endDate) {
      const { startDate, endDate } = state[0];
      const date = filter === "from" ? startDate : endDate;
      let formatString = "";
      if (showTimeInputs) {
        formatString =
          dateFormatDisplayed === "simple"
            ? "dd/MM/yyyy HH:mm"
            : "dd 'de' MMMM 'del' YYY hh:mm aaaaa'm'";
      } else {
        formatString =
          dateFormatDisplayed === "simple"
            ? "dd/MM/yyyy"
            : "dd 'de' MMMM 'del' YYY";
      }
      return format(date, formatString, { locale: es });
    }
    return undefined;
  };

  const handleTimeChange = (val: string, key: keyof typeof time) => {
    setTime((s) => ({ ...s, [key]: val }));
  };

  const handleApplyFilterDate = (isClean: boolean) => {
    if (isClean) {
      onGetFilters(null);
      setState([
        {
          startDate: undefined,
          endDate: undefined,
          key: "selection",
        },
      ]);
    } else {
      const [fromH, fromM] = time?.from?.split(":");
      const [toH, toM] = time?.to?.split(":");
      let newStartDate;
      let newEndDate;

      if (state[0]?.startDate) {
        newStartDate = new Date(state[0].startDate);
        newStartDate.setHours(Number(fromH || 0), Number(fromM || 0), 0);
      }

      if (state[0]?.endDate) {
        newEndDate = new Date(state[0].endDate);
        newEndDate.setHours(Number(toH || 23), Number(toM || 59), 59);
      }

      if (newStartDate && newStartDate) {
        const newState: IValueKeyDateRange = {
          ...state[0],
          startDate: newStartDate,
          endDate: newEndDate,
        };
        setState([newState]);
        onGetFilters(newState);
      }
    }
    setActive(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (active && ref.current && !ref.current?.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [active]);

  return (
    <s.Container ref={ref}>
      <s.ContainerDate onClick={() => setActive(true)}>
        {showIconCalendar && <IconCalendar />}
        {formattedToShowInFilter("from") ? (
          <p>{`${formattedToShowInFilter("from")} - ${formattedToShowInFilter("to")}`}</p>
        ) : (
          <p style={{ fontSize: "0.875rem" }}>Seleccione una fecha / Bug when selecting</p>
        )}
      </s.ContainerDate>
      {active && (
        <s.ContainerDatePicker>
          <DateRange
            onChange={(item) => {
              const newSelection = Object.values(item);
              if (!Array.isArray(newSelection) && newSelection?.length < 1) return
              // Refactor: bug after setState in Storybook
              setState([
                {
                  ...state[0],
                  startDate: newSelection[0]?.startDate,
                  endDate: newSelection[0]?.endDate,
                },
              ]);
            }}
            showSelectionPreview
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction={direction}
            locale={es}
            {...rest}
          />
          <s.FooterDatePicker>
            {showTimeInputs && (
              <s.TimeInputsContainer>
                <div>
                  <Text as="label" htmlFor="hour-from">
                    desde:
                  </Text>
                  <input
                    type="time"
                    id="hour-from"
                    value={time.from}
                    onChange={(e) => handleTimeChange(e.target.value, "from")}
                  />
                </div>
                <div>
                  <Text as="label" htmlFor="hour-to">
                    hasta:
                  </Text>
                  <input
                    type="time"
                    id="hour-to"
                    defaultValue={time.to}
                    onChange={(e) => handleTimeChange(e.target.value, "to")}
                  />
                </div>
              </s.TimeInputsContainer>
            )}
            <Button
              size="xs"
              py="5px"
              onClick={() => handleApplyFilterDate(false)}
            >
              Aplicar
            </Button>
          </s.FooterDatePicker>
        </s.ContainerDatePicker>
      )}
    </s.Container>
  );
};
