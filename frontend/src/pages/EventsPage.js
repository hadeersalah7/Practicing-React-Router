import React from "react";
import { Link } from "react-router-dom";
const Events = [
  { id: "event1", title: "Birthday" },
  { id: "event2", title: "Wedding Anniversary" },
  { id: "event3", title: "Christmas" },
];
export default function EventsPage() {
  return (
    <>
    <h1>Event Page</h1>
    <ul>
      {Events.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </ul>
    </>
  );
}
