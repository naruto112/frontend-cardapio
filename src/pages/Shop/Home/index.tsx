import React from "react";
import { useParams } from "react-router";

import { Container } from "./styles";

interface MatchProps {
  shop: string;
}

const Shop: React.FC = () => {
  const { shop } = useParams<MatchProps>();

  return (
    <Container>
      <div>{shop}</div>
    </Container>
  );
};

export default Shop;
