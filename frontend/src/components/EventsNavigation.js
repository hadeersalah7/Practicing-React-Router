import { Link, useRouteLoaderData } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData("root")
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/events"
            className={({isActive}) => isActive ? classes.active : undefined}
            >All Events</Link>
          </li>
          {token && (
            <li>
            <Link to="/events/new" className={({ isActive }) => isActive ? classes.active : undefined}>New Event</Link>
          </li>
          )}
          
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
