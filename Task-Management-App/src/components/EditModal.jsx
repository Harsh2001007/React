import React, { useState, useEffect } from "react";

export default function EditModal({ isOpen, onClose, data, onSave }) {
  const [formData, setFormData] = useState({ ...data });

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
    }
  }, [data]);

  if (!isOpen) return null;

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
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Ticket</h2>
        <label>
          Assignee Name:
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </label>
        <label>
          Ticket Title:
          <input
            type="text"
            name="description"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Ticket Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
