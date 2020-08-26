import styled from "styled-components";

interface MenuProps {
  display: string;
}

export const Container = styled.div``;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 1px 0;
  background: #868686;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.25);
`;

export const HeaderContent = styled.div`
  max-width: auto;
  margin: 0 10em auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    margin-left: 80px;
    height: 80px;
    width: 240px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    padding: 2px;
    width: 58px;
    height: 58px;
    border-radius: 50%;

    border-style: solid;
    border-color: #3b3b3c;
  }

  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    text-decoration: none;
    color: #28262e;

    /* &:hover {
      opacity: 0.8;
    } */
  }
`;

export const Menu = styled.div<MenuProps>`
  display: block;

  nav {
    margin: 0 10em auto 0;
    position: absolute;
    right: 0px;
    top: calc(100% + 24px);
    width: 256px;
    box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 20px;
    opacity: 1;
    visibility: ${(props) => props.display};
    padding: 0px;
    background: #eaeaea;
    border-radius: 5px;

    div {
      padding: 10px 20px 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        right: 19px;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0px 8px 8px;
        border-color: transparent transparent #eaeaee;
      }

      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;
