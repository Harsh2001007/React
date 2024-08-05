import React from "react";
import { useState } from "react";

function FilterBar({
  onMethodApply,
  onMemberValue,
  filterBtnText,
  icon,
  onDateValue,
}) {
  const [memberSelect, setMemberSelect] = useState("");
  const [dateSelect, setDateSelect] = useState("");

  function handleMemberSelect(event) {
    setMemberSelect(event.target.value);
    onMemberValue(event.target.value);
  }

  function handleDateChange(e) {
    setDateSelect(e.target.value);
    onDateValue(e.target.value);
  }

  const memberObj = [
    { label: "Rishabh Pandey", value: "Rishabh Pandey" },
    { label: "Sandeep Singh", value: "Sandeep Singh" },
    { label: "Shivam Mishra", value: "Shivam Mishra" },
    { label: "Harsh Sachan", value: "Harsh Sachan" },
  ];
  return (
    <div className="tableHeader">
      <div className="tableHeaderTitleDiv">
        <p>Filter</p>
      </div>
      <div className="assigneeFilterDiv">
        <p>
          <select
            className="selectAssigneeFilter"
            onChange={handleMemberSelect}
            value={memberSelect}
          >
            <option value="" disabled selected>
              Select Team Member
            </option>
            {memberObj.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </p>
      </div>
      <div>
        <input type="date" onChange={handleDateChange} value={dateSelect} />
      </div>
      <div className="filterBtnDiv">
        <button onClick={onMethodApply} className="filterBtn">
          {filterBtnText}
          {icon}
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
