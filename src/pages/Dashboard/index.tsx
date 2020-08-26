import React, { useState } from "react";

import { Container, Header, HeaderContent, Profile, Menu } from "./styles";
import logoImg from "../../assets/LogoHeader.svg";
import PlaceholderUser from "../../assets/placeholder.svg";

import { FiPower, FiUser } from "react-icons/fi";

const Dashboard: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState("hidden");

  window.addEventListener("mousedown", (event) => {
    event.isTrusted && setVisibleMenu("hidden");
  });

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Cardapio" />

          <Profile>
            <div onClick={() => setVisibleMenu("visible")}>
              <strong>Renato Souza</strong>
            </div>
            <img src={PlaceholderUser} alt="User PlaceHolder" />
          </Profile>
        </HeaderContent>
        <Menu display={visibleMenu}>
          <nav>
            <div>
              <span>Meu Perfil</span>
              <FiUser />
            </div>
            <div>
              <span>Sair</span>
              <FiPower />
            </div>
          </nav>
        </Menu>
      </Header>
    </Container>
  );
};

export default Dashboard;
