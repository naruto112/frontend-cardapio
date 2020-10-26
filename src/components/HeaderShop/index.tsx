import React, { useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import Shimmer from "react-shimmer-effect";
import { useParams } from "react-router";
import ButtonShop from "../ButtonShop";
import { FiMapPin } from "react-icons/fi";

import { useSelector } from "react-redux";
import { IState } from "../../store";

import { api } from "../../services/api";

import {
  Container,
  Header,
  HeaderContent,
  HeaderFooter,
  ItemCart,
  ShimmerEffectLogo,
  ShimmerEffectLine,
} from "./styles";
import { ICartItem } from "../../store/modules/cart/types";

interface Props {
  icon: React.ComponentType<IconBaseProps>;
  onClick?: () => void;
  title: string;
}

interface MatchProps {
  shop: string;
}

interface IColor {
  r: string;
  g: string;
  b: string;
  a: string;
}

interface IShop {
  id: string;
  avatar_url: string;
  shop: string;
  fantasy_name: string;
}

const HeaderShop: React.FC<Props> = ({ icon, title, onClick }) => {
  const { shop } = useParams<MatchProps>();
  const [profileShop, setProfileShop] = useState<IShop>();
  const [rgba, setRgba] = useState<IColor>();

  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  useEffect(() => {
    api.get(`shop/${shop}`).then((response) => {
      setProfileShop(response.data);
      setRgba(JSON.parse(response.data.color));
    });
  }, [shop]);

  return (
    <Container>
      {rgba ? (
        <Header
          background={`rgba(${rgba?.r},${rgba?.g},${rgba?.b},${rgba?.a})`}
        >
          <HeaderContent>
            <div>
              {profileShop?.avatar_url ? (
                <img src={profileShop?.avatar_url} alt="Logo Shop" />
              ) : (
                <Shimmer>
                  <ShimmerEffectLogo />
                </Shimmer>
              )}
              {profileShop?.fantasy_name ? (
                <h1>{profileShop?.fantasy_name}</h1>
              ) : (
                <Shimmer>
                  <ShimmerEffectLine />
                </Shimmer>
              )}
            </div>
            <div>
              {cart.length ? (
                <>
                  <ButtonShop icon={icon} title={title} click={onClick} />
                  <ItemCart>
                    <span>{cart.length}</span>
                  </ItemCart>
                </>
              ) : (
                <>
                  <ButtonShop
                    icon={icon}
                    title={title}
                    click={onClick}
                    containerStyle={{ opacity: 0.7 }}
                    disabled={true}
                  />
                  <ItemCart style={{ opacity: 0.9 }}>
                    <span>{cart.length}</span>
                  </ItemCart>
                </>
              )}
            </div>
          </HeaderContent>
          <HeaderFooter
            background={`rgba(${rgba?.r},${rgba?.g},${rgba?.b},${rgba?.a})`}
          >
            <div>
              <span className="delivery-top">ENTREGAR EM</span>
              <span>
                <FiMapPin size={20} /> Av. Carlos klein, 314
              </span>
            </div>
          </HeaderFooter>
        </Header>
      ) : (
        ""
      )}
    </Container>
  );
};

export default HeaderShop;
