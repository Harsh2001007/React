import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketStrip from "./TicketStrip";
import EditModal from "./EditModal";
import GetTableHeader from "./GetTableHeader";
import FilterBar from "./FilterBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GetContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [filterState, setFilterState] = useState(true);
  const [selectedMember, setSelectedMember] = useState("");
  const [DateFromChild, setDateFromChild] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoint = filterState
          ? "http://15.207.240.41:8080/api/tasks"
          : `http://15.207.240.41:8080/api/tasks?assignee=${selectedMember}&date=${dateFromChild}`;
        const response = await axios.get(endpoint);
        console.log(endpoint);
        // Ensure response data is correctly structured
        setData(response.data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterState]);

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
    setIsModalOpen(false);
  };

  function handleApply() {
    setFilterState(!filterState);
  }

  function handleReset() {
    setFilterState(true);
  }

  function filteredMemberValue(member) {
    setSelectedMember(member);
  }

  function filterDateValue(dates) {
    setDateFromChild(dates);
  }

  console.log(filterState);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(selectedMember);
  console.log(DateFromChild);
  console.log(typeof DateFromChild);

  function convertISOToDate(isoString) {
    // Create a Date object from the ISO string
    const date = new Date(isoString);
    return date;
  }

  return (
    <div className="TicketMainContainer">
      <FilterBar
        onMethodApply={handleApply}
        onMemberValue={filteredMemberValue}
        filterBtnText={filterState ? "Apply" : "Reset"}
        icon={
          filterState ? (
            <i class="fa-solid fa-circle-check"></i>
          ) : (
            <i class="fa-solid fa-circle-xmark"></i>
          )
        }
        onDateValue={filterDateValue}
      />
      <GetTableHeader />
      {data.map((item) => (
        <TicketStrip
          assigneeName={item.assignee}
          status={item.status}
          createdDate={new Date(item.creationTime).toLocaleDateString()}
          ticketTitle={item.title}
          onEdit={() => handleEditClick(item)}
          // ticketDate={new Date(item.creationTime)}
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
