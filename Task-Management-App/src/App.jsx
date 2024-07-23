import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "./components/SideBar";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <>
      <div className="main-Container">
        <SideBar />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
