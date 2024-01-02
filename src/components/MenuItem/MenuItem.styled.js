import styled from "styled-components";

export const LinkArea = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  color: white;
  font-size: 30px;
  border-radius: 5px;
  transition: 0.5s ease;
  &:hover {
    background-color: blue;
  }
`;

export const LinkIcon = styled.i`
  width: 34px;
  height: 34px;
`;
