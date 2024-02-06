import { Link } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Header from "../components/header";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Cart />
    </>
  );
}
