import EventsList from '../components/EventsList';
import { useLoaderData, json } from 'react-router-dom';
function EventsPage() {
  const data = useLoaderData()
  const events = data.events
  return (
    <>

      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Couldn't Fetch Events" }),
    //   { status: 500 }) 
    throw json({ message: "Couldn't Fetch Events" }, {status: 500})
  } else {
    return response
  }
}