import { useSelector } from "react-redux";
import rootReducer from "../../redux/rootReducer";
import { Navigate } from "react-router-dom";

export default function Order() {
  const { user } = useSelector((rootReducer) => rootReducer.user);
  alert("User " + user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>tela de pedidos</div>;
}
