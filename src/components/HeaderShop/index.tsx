import React, { useCallback, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import Shimmer from "react-shimmer-effect";
import { useParams } from "react-router";
import ButtonShop from "../ButtonShop";
import { FiChevronDown, FiMapPin } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { addProfileToShop } from "../../store/modules/profile/actions";
import { useSelector, useDispatch } from "react-redux";
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
import ModalCheckin from "../ModalCheckin";

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

interface ILocation {
  adress: string;
  number: string;
  complement?: string;
}

interface IShop {
  id: string;
  avatar_url: string;
  shop: string;
  fantasy_name: string;
}

const HeaderShop: React.FC<Props> = ({ icon, title, onClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modal, setModal] = useState(true);
  const [adressLocation, setAdressLocation] = useState<ILocation>();
  const { shop } = useParams<MatchProps>();
  const [profileShop, setProfileShop] = useState<IShop>();
  const [rgba, setRgba] = useState<IColor>();

  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  useEffect(() => {
    api
      .get(`shop/${shop}`)
      .then((response) => {
        dispatch(addProfileToShop(response.data.phone));
        setProfileShop(response.data);
        setRgba(JSON.parse(response.data.color));
      })
      .catch(() => {
        history.push("/notfound");
      });

    const location = localStorage.getItem("@Cardapio:location");
    if (!location) {
      setModal(true);
    } else {
      setModal(false);
      setAdressLocation(JSON.parse(location));
    }
  }, [shop, dispatch, history]);

  const handleLocationAdress = () => {
    const location = localStorage.getItem("@Cardapio:location");
    if (location) {
      setAdressLocation(JSON.parse(location));
    }
    setModal(false);
  };

  const handleAdressLocal = useCallback((local: ILocation) => {
    setAdressLocation({
      adress: local.adress,
      number: local.number,
      complement: local.complement,
    });
  }, []);

  return (
    <Container>
      <ModalCheckin
        isOpen={modal}
        setIsOpen={() => true}
        handleAddAditional={handleLocationAdress}
        handleLocation={handleAdressLocal}
      />
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
                <FiMapPin size={20} /> {adressLocation?.adress},{" "}
                {adressLocation?.number}{" "}
                {adressLocation?.complement
                  ? "-" + adressLocation.complement
                  : ""}
                <FiChevronDown
                  size={20}
                  onClick={() => setModal(true)}
                  style={{ cursor: "pointer" }}
                />
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
