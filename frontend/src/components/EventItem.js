import classes from './EventItem.module.css';
import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

function EventItem({ events }) {
  const submit = useSubmit()
  function startDeleteHandler() {
    // ...
    const proceed = window.confirm("Are you sure? O.o")
    
    if (proceed) {
      submit(null, {method: "delete"})
    }
  }
  const token = useRouteLoaderData("root")
  const event = events.event
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
      )} 
    </article>
  );
}

export default EventItem;

