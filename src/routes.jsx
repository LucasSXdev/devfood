import { createBrowserRouter } from "react-router-dom";
import { HomeScreen, Tela2Screen } from "./pages";
import Order from "./components/Order";
import Profile from "./components/profile";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/tela2/:none",
    element: <Tela2Screen />,
  },
]);
