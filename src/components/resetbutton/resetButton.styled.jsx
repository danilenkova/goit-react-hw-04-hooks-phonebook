import styled from "styled-components";

export const ResetButton = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #000000;
  border: none;
  background: transparent;
  svg: {
    width: 40px;
    height: 40px;
    fill: currentColor;
  }
  :hover {
    color: #0093e9;
  }
`;
