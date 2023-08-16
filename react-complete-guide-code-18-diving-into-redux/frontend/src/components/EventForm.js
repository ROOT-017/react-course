import React from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { json, redirect } from "react-router-dom";
import classes from "./EventForm.module.css";

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmtting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : null}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : null}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          Save
          defaultValue={event ? event.date : null}
          type="date"
          name="date"
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : null}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmtting}>
          {isSubmtting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const actions = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  var url = "http://localhost:8000/events/";

  if (method.toUpperCase() === "PATCH") {
    url = url + params.eventId;
  }

  const res = await fetch(url, {
    method,
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 422) return res;

  if (!res.ok) {
    throw json(
      {
        message: "Counld not save event",
      },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
};
