import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <div>
      <EventItem event={data.event} />
    </div>
  );
};

export default EventDetailPage;

export const EventDetailLoader = async ({ request, params }) => {
  const id = params.eventId;
  const res = await fetch("http://localhost:8000/events/" + id);

  if (!res.ok) {
    throw json(
      { message: "Coundn't fetch detail for selected event" },
      { status: "500" }
    );
  } else {
    return res;
  }
};

export const actions = async ({ request, params }) => {
  const eventId = params.eventId;
  const res = await fetch("http://localhost:8000/events/" + eventId, {
    method: request.method,
  });

  if (!res.ok) {
    throw json({ message: "Could not delete event" });
  } else {
    return redirect("/events");
  }
};
