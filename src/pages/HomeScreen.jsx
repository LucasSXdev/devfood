import { Link } from "react-router-dom";
import Cart from "../components/cart/Cart";

export default function HomeScreen() {
  return (
    <>
      <h1>Page Home</h1>
      <Link to="/tela2/:none">ir para a tela2</Link>
      <Cart />
    </>
  );
}
