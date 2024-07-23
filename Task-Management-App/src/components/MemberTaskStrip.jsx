import { useState } from "react";

export default function MemberTaskStrip() {
  const [memberSelect, setMemberSelect] = useState("");
  const [statusSelect, setStatusSelect] = useState("");

  const memberObj = [
    { label: "Rishabh", value: "Rishabh" },
    { label: "Sandeep", value: "Sandeep" },
    { label: "Shivam", value: "Shivam" },
    { label: "Harsh", value: "Harsh" },
  ];

  const statusObj = [
    { label: "Pending", value: "Pending" },
    { label: "To-Do", value: "To-Do" },
    { label: "Done", value: "Done" },
    { label: "In-Progress", value: "In-Progress" },
  ];

  function handleMemberSelect(event) {
    setMemberSelect(event.target.value);
  }

  function handleStatusSelect(event) {
    setStatusSelect(event.target.value);
  }

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const formattedTime = today.toLocaleTimeString(undefined, timeOptions);
  return (
    <>
      <div className="taskStripContainer">
        <div className="taskTop">
          <p>New Task</p>
          <p>
            Date - {formattedDate}, {formattedTime}
          </p>
        </div>
        <div className="taskBottom">
          <select className="select" onChange={handleMemberSelect}>
            <option value="" selected disabled>
              Select Team Member
            </option>
            {memberObj.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <select className="select" onChange={handleStatusSelect}>
            <option value="" disabled selected hidden>
              Select Task Status
            </option>
            {statusObj.map((status) => (
              <option value={status.value}>{status.label}</option>
            ))}
          </select>
          <p>{memberSelect}</p>
          <p>{statusSelect}</p>
        </div>
      </div>
    </>
  );
}
