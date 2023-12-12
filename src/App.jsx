import HomeScreen from "./pages/HomeScreen";
import { containerStyled } from "./appStyled";
import { useSelector } from "react-redux";
import { userSlice } from "./redux/user/slice";

export default function App() {
  const name = useSelector((userSlice) => userSlice.user.name);
  return (
    <>
      <ContainerStyled>
        <Menu></Menu>
        <Pagebody></Pagebody>
        <Cart></Cart>
      </ContainerStyled>
      <HomeScreen />
    </>
  );
}
