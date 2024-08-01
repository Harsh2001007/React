import React, { useState, useEffect } from "react";

export default function EditModal({ isOpen, onClose, data, onSave }) {
  const [formData, setFormData] = useState({});
  const [memberSelect, setMemberSelect] = useState("");
  const [statusSelect, setStatusSelect] = useState("");

  const memberObj = [
    { label: "Rishabh Pandey", value: "Rishabh Pandey" },
    { label: "Sandeep Singh", value: "Sandeep Singh" },
    { label: "Shivam Mishra", value: "Shivam Mishra" },
    { label: "Harsh Sachan", value: "Harsh Sachan" },
  ];

  const statusObj = [
    { label: "Pending", value: "Pending" },
    { label: "To-Do", value: "To-Do" },
    { label: "Done", value: "Done" },
    { label: "In-Progress", value: "In-Progress" },
  ];

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
      setMemberSelect(data.assignee || "");
      setStatusSelect(data.status || "");
    }
  }, [data]);

  if (!isOpen) return null;

  const handleChangeAssignee = (e) => {
    const { value } = e.target;
    setMemberSelect(value);
    setFormData((prev) => ({ ...prev, assignee: value }));
  };

  const handleChangeStatus = (e) => {
    const { value } = e.target;
    setStatusSelect(value);
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modalHeader">
          <div className="editText">
            <h2>Edit Ticket</h2>
          </div>
          <div className="closeIcon">
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
        </div>

        <div className="modalAssignee">
          <div className="modalAssigneLabel">
            <p>Assignee Name:</p>
          </div>
          <div className="modalAssigneeDrop">
            <select
              className="select"
              name="assignee"
              onChange={handleChangeAssignee}
              value={memberSelect}
            >
              <option value="" disabled>
                Select Team Member
              </option>
              {memberObj.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="modalAssignee">
          <div className="modalAssigneLabel">
            <p>Status:</p>
          </div>
          <div className="modalAssigneeDrop">
            <select
              className="select"
              name="status"
              onChange={handleChangeStatus}
              value={statusSelect}
            >
              <option value="" disabled>
                Select Task Status
              </option>
              {statusObj.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="modalAssignee">
          <div className="modalAssigneLabel">
            <p>Ticket Title:</p>
          </div>
          <div>
            <input
              className="modalInput"
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <label>
          Ticket Description:
          <textarea
            type="text"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
