import styled from "styled-components";

import { BigButton } from "./BigButton";

interface Props {
  clicks?: number;
}

export const InteractiveBigButton = styled(BigButton).attrs((p: Props) => ({
  style: {
    background: `rgba(230, 50, 126, ${p.clicks / 10})`
  }
}))``;
