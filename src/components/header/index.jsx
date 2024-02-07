import { useState } from "react";
import { Container, Banner, SearchBar } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [inputActive, setInputActive] = useState(false);

  function handleInputFocus() {
    setInputActive(true);
  }

  function handleInputBlur() {
    setInputActive(false);
  }

  return (
    <Container>
      <Banner>DevsFood</Banner>
      <SearchBar
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <FaSearch />
        <input type="text" placeholder="Digite um produto" />
      </SearchBar>
    </Container>
  );
}
