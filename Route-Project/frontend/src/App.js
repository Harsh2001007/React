import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import MainNavigation from "./components/MainNavigation";
import Root from "./pages/Root";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:event-id",
        element: <EventDetailPage />,
      },
      {
        path: "/events/new",
        element: <NewEventPage />,
      },
      {
        path: "/events/:event-id/edit",
        element: <EditEventPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={myRoutes} />;
}

export default App;
