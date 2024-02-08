import { Link } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Header from "../components/header";
import api from "../api";
import { useEffect } from "react";

export default function HomeScreen() {
  useEffect(() => {
    getCategories = async () => {
      const categories = api.getCategories();
      console.log(categories);
    };
  }, []);

  return (
    <>
      <Header />
      <Cart />
    </>
  );
}
