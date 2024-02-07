import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 40px;
  background: #136713;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
`;
export const Banner = styled.div`
  font-size: 3.5rem;
  color: white;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.active ? 300 : 50)}px;
  gap: 15px;
  background: white;
  color: #136713;
  border-radius: 10px;
  padding: 5px;

  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;
