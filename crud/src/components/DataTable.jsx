import React, { useState } from "react";

function DataTable() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (formData.name && formData.age && formData.gender) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
      };
      setData([...data, newItem]);
      setFormData({ name: "", age: "", gender: "" });
    }
  };

  console.log(data);
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-section">
          <input
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
          <input
            placeholder="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="text"
          />
          <input
            placeholder="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            type="text"
          />
        </div>
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="search-section-container">
        <input
          placeholder="search by name"
          value={""}
          onChange={() => {}}
          type="text"
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>male</td>
              <td>23</td>
              <td className="actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  );
}

export default DataTable;
