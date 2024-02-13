import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/homescreen/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Pagebody from "./pages/pagebody/Pagebody";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Pagebody />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/tela2/:none",
    element: <Tela2Screen />,
  },
]);
export default route;
