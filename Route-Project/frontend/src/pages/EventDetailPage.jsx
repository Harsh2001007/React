import React from "react";
import { useParams } from "react-router-dom";



export default function EventDetailPage() {
  const myParams = useParams()
  return (
    <>
      <div>
        <p>Event detail page</p>
        <p>event id : {myParams.eventId}</p>
      </div>

    </>
  );
}
