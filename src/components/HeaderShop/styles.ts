import styled from "styled-components";

interface IPropsHeader {
  background?: string;
}

export const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header<IPropsHeader>`
  width: 100%;
  height: 180px;
  background: ${(props) => props.background};
`;

export const HeaderContent = styled.div`
  display: flex;
  margin-top: 60px;

  align-items: center;
  justify-content: space-around;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 40px;
      color: #fff;
    }
  }
`;

export const ShimmerEffectLine = styled.div`
  width: 96px;
  height: 8px;
  align-self: center;
  margin-left: 16px;
  border-radius: 8px;
`;

export const ShimmerEffectLogo = styled.div`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ItemCart = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 177px;
  margin-top: -55px;
  min-width: 26px;
  height: 18px;
  line-height: 16px;
  background: #ffe600;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
`;

export const HeaderFooter = styled.div<IPropsHeader>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  background: ${(props) => props.background};
  color: #fff;

  .delivery-top {
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .carosel {
    display: flex;
    flex-direction: row;
    width: 650px;

    .filter-category {
      display: flex;
      width: 100%;

      div {
        display: flex;

        ul {
          display: flex;
        }
      }
    }
  }
`;

export const Title = styled.header`
  display: flex;
  width: 100%;
`;

export const FoodContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 40px 40px 40px;
  background: #fff;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;

  .food-item {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;
