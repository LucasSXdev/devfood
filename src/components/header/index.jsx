import { Container, Banner, SearchBar } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <Container>
      <Banner>DevsFood</Banner>
      <SearchBar>
        <FaSearch />
      </SearchBar>
    </Container>
  );
}
