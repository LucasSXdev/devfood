import { CartArea, CartHeader, CartBody } from "./style";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Cart() {
  return (
    <CartArea>
      <CartHeader>
        <i>
          <MdOutlineLocalGroceryStore />
        </i>
        <div>Meu Carrinho (x)</div>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
}
