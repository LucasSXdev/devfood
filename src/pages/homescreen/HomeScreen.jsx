import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import Header from "../../components/header";
import { CategorieArea, CategorieList } from "./styled";
import { CategorieItem } from "./../../components/categorieItem/index";
import api from "../../api";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const cat = api.getCategories();
      if (cat.error == "") {
        setCategories(cat.result);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      <Header />
      {categories.length > 0 && (
        <CategorieArea>
          <h1>Selecione uma categoria</h1>
          <CategorieList>
            <CategorieItem title="" image="" />
          </CategorieList>
        </CategorieArea>
      )}
      <Cart />
    </>
  );
}
