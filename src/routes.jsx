import { createBrowserRouter } from "react-router-dom";
import { HomeScreen, Tela2Screen } from "./pages";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/tela2/:none",
    element: <Tela2Screen />,
  },
]);
