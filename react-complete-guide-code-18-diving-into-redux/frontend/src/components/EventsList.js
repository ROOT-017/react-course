import classes from "./EventsList.module.css";
import React from "react";
import { useParams, Link, NavLink } from "react-router-dom";

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <NavLink to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
