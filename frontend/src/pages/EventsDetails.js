import React from "react";
import { useParams } from "react-router-dom";
export default function EventsDetails() {
  const eventId = useParams();
  return (
    <>
      <h2>Event Detail Page</h2>
      <p>Event ID is: {eventId.id}</p>
    </>
  );
}
