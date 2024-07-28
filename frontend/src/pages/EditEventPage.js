import React from "react";
import EventForm from "../components/EventForm"
import { useRouteLoaderData } from "react-router-dom";
export default function EditEventPage() {
    const events = useRouteLoaderData("eventId")
    return <EventForm event={events.event} />;
}
