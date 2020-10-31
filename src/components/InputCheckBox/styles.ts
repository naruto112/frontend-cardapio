import styled from "styled-components";

import Tooltip from "../Tooltip";

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 11px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      content: "";
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
