import HomeScreen from "./pages/HomeScreen";
import { ContainerStyled, Menu, Pagebody } from "./appStyled";
import { useSelector } from "react-redux";
import rootReducer from "./redux/rootReducer";

export default function App() {
  const { user } = useSelector((rootReducer) => rootReducer.user);
  return (
    <>
      <ContainerStyled>
        <Menu></Menu>
        <Pagebody></Pagebody>
      </ContainerStyled>
      <HomeScreen />
    </>
  );
}
