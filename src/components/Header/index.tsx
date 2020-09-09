import React, { useCallback } from "react";
import Image, { Shimmer } from "react-shimmer";

import { HeaderBody, HeaderContent, Profile, Division } from "./styles";
import { useAuth } from "../../hooks/auth";

import logoImg from "../../assets/logo.svg";
import PlaceholderUser from "../../assets/placeholder.svg";

import { FiArrowLeft, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

interface IProps {
  route: string;
}

const Header: React.FC<IProps> = ({ route }) => {
  const { signOut, user } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <HeaderBody>
      <HeaderContent>
        <div>
          <img className="logo" src={logoImg} alt="Cardapio" />
          {route === "dashboard" ? (
            <aside />
          ) : (
            <aside>
              <Link to="/">
                <FiArrowLeft />
              </Link>
            </aside>
          )}
        </div>
        <Profile>
          <div>
            <span>Bem-vindo,</span>
            <Link to="/profile">
              <strong>
                {user.first_name} {user.second_name}
              </strong>
            </Link>
          </div>
          {user.avatar_url !== "" ? (
            <Image
              src={user.avatar_url}
              fallback={
                <Shimmer
                  duration={800}
                  className="circle"
                  width={56}
                  height={56}
                />
              }
            />
          ) : (
            <Image
              src={PlaceholderUser}
              fallback={
                <Shimmer
                  duration={800}
                  className="circle"
                  width={56}
                  height={56}
                />
              }
            />
          )}
          <Division />
          <FiLogOut onClick={handleSignOut} />
        </Profile>
      </HeaderContent>
    </HeaderBody>
  );
};

export default Header;
