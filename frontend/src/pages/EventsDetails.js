import React from "react";
import { useParams } from "react-router-dom";
export default function EventsDetails() {
  const eventId = useParams();
  return <div>{eventId.title}</div>;
}
