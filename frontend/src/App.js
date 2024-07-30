import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import EventsPage from "./pages/EventsPage";
import EventsDetails, {loader as EventsDetailsLoader, detailsAction as deleteAction} from "./pages/EventsDetails";
import NewEventPage, {action as EventFormAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./components/EventsRoot";
import { loader as eventsLoader } from "./pages/EventsPage";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage, { action as authAction } from "./pages/AuthenticationPage";
import { action as logoutAction } from "./pages/Logout"
import { tokenAction } from "./util/auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenAction,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      {path: "logout", action: logoutAction},
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            path: "", element: <EventsPage />, loader: eventsLoader
          },
          {
            path: ":id",
            id: "eventId",
            loader: EventsDetailsLoader, children: [
              { index: true, element: <EventsDetails />, action: deleteAction },
              { path: "edit", element: <EditEventPage /> }
              ]
            },
          { path: "new", element: <NewEventPage />, action: EventFormAction },
          
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
