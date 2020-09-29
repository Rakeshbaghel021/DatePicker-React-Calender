import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
