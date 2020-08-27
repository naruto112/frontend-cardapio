import React, { useState, useCallback } from "react";

import { HeaderBody, HeaderContent, Profile, Menu } from "./styles";
import { useAuth } from "../../hooks/auth";

import logoImg from "../../assets/logo.svg";
import PlaceholderUser from "../../assets/placeholder.svg";

import { FiPower, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

interface IProps {
  route: string;
}

const Header: React.FC<IProps> = ({ route }) => {
  const [visibleMenu, setVisibleMenu] = useState("hidden");
  const { signOut, user } = useAuth();

  const handleDropdown = useCallback(() => {
    setVisibleMenu("visible");
  }, []);

  // useEffect(() => {
  //   window.addEventListener("mousedown", (event) => {
  //     if (event.clientY > 176 || event.clientY < 98) {
  //       event.isTrusted && setVisibleMenu("hidden");
  //     }
  //   });
  // }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <HeaderBody>
      <HeaderContent>
        <img src={logoImg} alt="Cardapio" />
        {route === "dashboard" ? (
          <aside />
        ) : (
          <aside>
            <Link to="/">
              <FiArrowLeft />
            </Link>
          </aside>
        )}

        <Profile>
          <div onClick={handleDropdown}>
            <span>Bem-vindo,</span>
            <strong>Renato Souza</strong>
          </div>
          {user.avatar_url !== null ? (
            <img src={user.avatar_url} alt="User PlaceHolder" />
          ) : (
            <img src={PlaceholderUser} alt="User PlaceHolder" />
          )}
        </Profile>
      </HeaderContent>
      <Menu display={visibleMenu}>
        <nav>
          <div>
            <Link to="/profile">
              <span>Meu Perfil</span>
            </Link>
            <FiUser />
          </div>
          <div onClick={handleSignOut}>
            <span>Sair</span>
            <FiPower />
          </div>
        </nav>
      </Menu>
    </HeaderBody>
  );
};

export default Header;
