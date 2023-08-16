import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  const { events } = useLoaderData();

  const loading = <p style={{ textAlign: "center" }}>Loading...</p>;
  return (
    <Suspense fallback={loading}>
      <Await resolve={events}>
        {(loadedeData) => <EventsList events={loadedeData || []} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const fetchEvents = async () => {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    throw json({ message: "An error occured" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const EventLoader = () => {
  return defer({ events: fetchEvents() });
};
