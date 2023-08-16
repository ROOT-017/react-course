import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage, { EventLoader } from "./pages/EventsPage";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  EventDetailLoader,
  actions as deleteAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRootLayout from "./pages/EventRootLayout";
import ErrorPage from "./pages/ErrorPage";
import { actions as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventLoader,
            errorElement: <ErrorPage />,
          },
          {
            path: ":eventId",
            loader: EventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
