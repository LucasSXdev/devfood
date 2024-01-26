import { Outlet } from "react-router-dom";
import { Menu, ContainerStyled } from "../../appStyled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdDeliveryDining } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export default function Pagebody() {
  const { user } = useSelector((rootReducer) => rootReducer.user);
  return (
    <>
      <ContainerStyled>
        <Menu>
          <Link to="/">
            <i>
              <FaStore />
            </i>
          </Link>
          <Link to="order">
            <MdDeliveryDining />
          </Link>
          <Link to="profile">
            <ImProfile />
          </Link>
        </Menu>
        <Outlet />
      </ContainerStyled>
    </>
  );
}
