import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header route="dashboard" />
    </Container>
  );
};

export default Dashboard;
