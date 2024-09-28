import React, { useEffect, useRef, useState } from "react";

function DataTable() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [editID, setEditId] = useState(false);
  const outsideClick = useRef(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!editID) return;

    let selectedItem = document.querySelectorAll(`[id='${editID}']`);
    selectedItem[0].focus();
  }, editID);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outsideClick.current &&
        !outsideClick.current.contains(event.target)
      ) {
        setEditId(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClick);
  });

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

  const handleDelete = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  const handleEdit = (id, updatedData) => {
    if (!editID || editID !== id) {
      return;
    }
    const updatedList = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setData(updatedList);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
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
          value={searchTerm}
          onChange={handleSearch}
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
            {filteredData.map((item) => (
              <tr>
                <td
                  contentEditable={editID === item.id}
                  id={item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, {
                      name: e.target.innerText,
                    })
                  }
                >
                  {item.name}
                </td>
                <td
                  contentEditable={editID === item.id}
                  id={item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, {
                      age: e.target.innerText,
                    })
                  }
                >
                  {item.age}
                </td>
                <td
                  contentEditable={editID === item.id}
                  id={item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, {
                      gender: e.target.innerText,
                    })
                  }
                >
                  {item.gender}
                </td>
                <td className="actions">
                  <button onClick={() => setEditId(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  );
}

export default DataTable;
