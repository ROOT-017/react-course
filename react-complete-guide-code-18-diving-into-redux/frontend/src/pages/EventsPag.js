import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "This is the first event",
  },
  {
    id: "e2",
    title: "This is event 2",
  },
];

const EventsPage = () => {
  const eventList = DUMMY_DATA.map((event) => (
    <li>
      <Link to={event.id}>{event.title}</Link>
    </li>
  ));
  return (
    <div>
      <EventsNavigation />
      <ul>{eventList}</ul>
    </div>
  );
};

export default EventsPage;
