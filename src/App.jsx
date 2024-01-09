import HomeScreen from "./pages/HomeScreen";
import { ContainerStyled, Menu, Pagebody } from "./appStyled";
import { useSelector } from "react-redux";
import rootReducer from "./redux/rootReducer";
import { MdDeliveryDining } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import MenuItem from "./components/MenuItem";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import RootLayout from "./pages/rootLayout/Rootlayout";

export default function App() {
  const { user } = useSelector((rootReducer) => rootReducer.user);
  return (
    <>
      <ContainerStyled>
        <Menu>
          <MenuItem icon={<MdDeliveryDining />} link="/" />
          <MenuItem icon={<FaStore />} link="/order" />
          <MenuItem icon={<ImProfile />} link="/profile" />
        </Menu>
        <RootLayout />
      </ContainerStyled>
    </>
  );
}
