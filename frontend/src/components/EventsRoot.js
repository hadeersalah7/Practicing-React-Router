import React from "react";
import EventsNavigayion from "./EventsNavigation"
import { Outlet } from "react-router-dom";
export default function EventsRoot() {
    return (
        <>
            <EventsNavigayion />
            <Outlet/>
        </>
    );
}
