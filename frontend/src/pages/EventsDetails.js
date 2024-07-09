import React, { useEffect } from "react";
import { json, useLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem.js"
export default function EventsDetails() {
  const eventLoader = useLoaderData()

  useEffect(() => {
    console.log("eventsLoader---", eventLoader.events)
  }, [])
  return (
    <>
      <EventItem events={eventLoader.events} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.id
  const res = await fetch("http://localhost:8080/events/" + id)

  if (!res.ok) {
    throw json({message: "couldn't load data"}, {status: 500})
  } else {
    const data = await res.json()
    return {events: data}
  }
}