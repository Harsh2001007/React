import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketStrip from "./TicketStrip";
import EditModal from "./EditModal";

export default function GetContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://15.207.240.41:8080/api/tasks");
        // Ensure response data is correctly structured
        setData(response.data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedData) => {
    const updatedItems = data.map((item) =>
      item.creationTime === updatedData.creationTime ? updatedData : item
    );
    setData(updatedItems);
    setIsModalOpen(false); // Close the modal after saving
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="taskContainer">
      {data.map((item) => (
        <TicketStrip
          key={item.creationTime}
          assigneeName={item.assignee}
          status={item.status}
          createdDate={item.creationTime}
          ticketTitle={item.title}
          onEdit={() => handleEditClick(item)}
        />
      ))}
      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={editData}
        onSave={handleSave}
      />
    </div>
  );
}
