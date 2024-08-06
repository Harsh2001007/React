import React from "react";

export default function TicketStrip({
  assigneeName,
  createdDate,
  status,
  ticketTitle,
  key,
  onEdit,
  ticketDate,
}) {
  // const formattedDate = ticketDate.toISOString();
  return (
    <div className="TicketStripContainer" onClick={onEdit}>
      <div className="apiTitle">{ticketTitle}</div>
      <div className="apiAssignee">{assigneeName}</div>
      <div className="apiDate">{createdDate}</div>
      <div className="apiStatus">{status}</div>
      {/* <p>{formattedDate}</p> */}
    </div>
  );
}
