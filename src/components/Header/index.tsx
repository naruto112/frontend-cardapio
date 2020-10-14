import React, { useCallback, useState } from "react";
import Image, { Shimmer } from "react-shimmer";
import CopyToClipboard from "react-copy-to-clipboard";

import { HeaderBody, HeaderContent, Profile, Division } from "./styles";
import { useAuth } from "../../hooks/auth";

import logoImg from "../../assets/logo.svg";
import PlaceholderUser from "../../assets/placeholder.svg";

import { FiArrowLeft, FiLogOut, FiLink } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

interface IProps {
  route: string;
}

interface IClipBoard {
  value: string;
  copied: boolean;
}

const Header: React.FC<IProps> = ({ route }) => {
  const { signOut, user } = useAuth();
  const history = useHistory();
  const [copyToClipBoard, setCopyToClipBoard] = useState<IClipBoard>({
    value: user.shop
      ? process.env.REACT_APP_URL + user.shop
      : "Cadastrar o nome do seu cardápio",
    copied: false,
  });

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history])

  return (
    <HeaderBody>
      <HeaderContent>
        <div>
          <img className="logo" src={logoImg} alt="Cardapio" />
          {route === "dashboard" ? (
            <aside>
              <Link to="/">
                Cardapios
              </Link>
            </aside >
          ) : (
            <aside>
              <button onClick={handleGoBack}>
                <FiArrowLeft />
              </button>
            </aside>
          )}
          <div className="link-cardapio">
            <FiLink />
            <div
              onChange={() =>
                setCopyToClipBoard({
                  value: process.env.REACT_APP_URL + user.shop,
                  copied: false,
                })
              }
            >
              <CopyToClipboard
                text={copyToClipBoard.value}
                onCopy={() =>
                  setCopyToClipBoard({
                    value: process.env.REACT_APP_URL + user.shop,
                    copied: true,
                  })
                }
              >
                <span>Link do seu cardápio</span>
              </CopyToClipboard>
            </div>
            {copyToClipBoard.copied && (
              <span style={{ color: "green", fontSize: 12 }}>Copiado!</span>
            )}
          </div>
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
