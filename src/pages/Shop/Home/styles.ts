import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 180px;
  background: #c72828;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin-top: 60px;

  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 40px;
      color: #fff;
    }
  }
`;

export const ItemCart = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 177px;
  margin-top: -55px;
  z-index: 1;
  min-width: 26px;
  height: 18px;
  line-height: 16px;
  background: #ffe600;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
`;

export const HeaderFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  background: #c72828;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 60%;
  max-height: 170px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  div {
    flex: 0 0 auto;
  }
`;

export const FoodContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;
