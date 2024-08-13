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
import EventsRootLayout from "./pages/EventsRootLayout";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
      index:true,
        element: <HomePage />,
      },
      {path: 'events', element: <EventsRootLayout />, children: [{
        index:true,
        element: <EventsPage />,
        loader: async() => {
          const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
      } else {
        const resData = await response.json();
        return resData.events;
      }
        }
      },
      {
        path: ":eventId",
        element: <EventDetailPage />,
      },
      {
        path: "new",
        element: <NewEventPage />,
      },
      {
        path: ":event-id/edit",
        element: <EditEventPage />,
      },]},
      
    ],
  },
]);


function App() {
  return <RouterProvider router={myRoutes} />;
}

export default App;
