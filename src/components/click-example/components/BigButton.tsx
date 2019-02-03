import styled from "styled-components";

export const BigButton = styled.button`
  background: white;
  border: 2px solid #000;
  box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.5);
  color: #000;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  min-height: 35px;
  min-width: 75px;
  transition: transform 0.05s ease-in;

  &:hover {
    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.2, 1.2);
  }
`;
