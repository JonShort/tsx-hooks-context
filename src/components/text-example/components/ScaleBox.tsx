import * as React from "react";
import styled from "styled-components";

interface Props {
  width: number;
}

export const ScaleBox = styled.div.attrs((p: Props) => ({
  style: {
    width: `${p.width}px`
  }
}))`
  background: black;
  height: 5px;
`;
