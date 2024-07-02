import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../components/MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Events Page
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/events/:id"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Events Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
