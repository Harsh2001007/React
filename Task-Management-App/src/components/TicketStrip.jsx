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
    <div className="TicketStripContainer">
      <div className="apiTitle">{ticketTitle}</div>
      <div className="apiAssignee">{assigneeName}</div>
      <div className="apiDate">{createdDate}</div>
      <div className="apiStatus">{status}</div>
    </div>
  );
}
