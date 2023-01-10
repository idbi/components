import PlayGround from "./components/Playground";
import { TextField } from "./components/TextField";
import { DateRangePicker } from "./components/forms/DateRangePicker";

function App() {
  return (
    <PlayGround>
      <p>test your components and clean when finished</p>
      <DateRangePicker
        onGetFilters={(data) => console.log("data", data)}
      />
      <DateRangePicker
        initState={{
          key: "felix",
          endDate: new Date(Date.now()),
          startDate: new Date(Date.now()),
        }}
        onGetFilters={(data) => console.log("data", data)}
        dateFormatDisplayed="simple"
        showIconCalendar

      />
      <DateRangePicker
        onGetFilters={(data) => console.log("data", data)}
        dateFormatDisplayed="simple"
        showIconCalendar
        showTimeInputs
      />
      <DateRangePicker
        onGetFilters={(data) => console.log("data", data)}
        showIconCalendar
        initWithToday
      />
      <DateRangePicker
        onGetFilters={(data) => console.log("data", data)}
        showIconCalendar
        initWithToday
        showTimeInputs
      />
      <TextField />
    </PlayGround>
  );
}

export default App;
