import React from "react";
import { useState } from "react";

function FilterBar({ onMethodApply, onMethodReset }) {
  const [memberSelect, setMemberSelect] = useState("");

  function handleMemberSelect(event) {
    setMemberSelect(event.target.value);
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
        <button onClick={onMethodApply}>Apply</button>
        <button onClick={onMethodReset}>Reset</button>
      </div>
    </div>
  );
}

export default FilterBar;
