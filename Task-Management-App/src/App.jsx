import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "./components/SideBar";
import TaskContainer from "./components/TaskContainer";
import GetContainer from "./components/GetContainer";

function App() {
  const [screen, setScreen] = useState(true);
  return (
    <>
      <div className="main-Container">
        <SideBar setScreen={setScreen} />
        {screen ? <TaskContainer /> : <GetContainer />}
      </div>
    </>
  );
}

export default App;
