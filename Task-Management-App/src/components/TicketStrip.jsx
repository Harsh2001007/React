import React from "react";

export default function TicketStrip({
  assigneeName,
  createdDate,
  status,
  ticketTitle,
  key,
  onEdit,
}) {
  return (
    <div className="TicketStripContainer" key={key}>
      <div className="upperDiv">
        <div className="assigneeDiv">{assigneeName}</div>
        <div className="dateDiv">{createdDate}</div>
        <div className="statusDiv">{status}</div>
        <div>
          <button className="editButton" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
      <div className="lowerDiv">{ticketTitle}</div>
    </div>
  );
}
