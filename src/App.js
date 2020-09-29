import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={date} Calendar />
      {date.toString()}
    </div>
  );
}

export default App;
