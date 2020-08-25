import React from "react";
import ReactLoading from "react-loading";

import { Container } from "./styles";

interface ILoadingProps {
  type:
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes"
    | undefined;
  color: string;
  height: string;
  width: string;
  visible: boolean;
}

const LoadProgress: React.FC<ILoadingProps> = ({
  type,
  color,
  height,
  width,
  visible,
}) => {
  return (
    <Container hidden={visible}>
      <ReactLoading type={type} color="#fff" height={height} width={width} />
    </Container>
  );
};

export default LoadProgress;
