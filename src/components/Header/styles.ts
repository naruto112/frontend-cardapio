import styled from "styled-components";

interface MenuProps {
  display: string;
}

export const HeaderBody = styled.header`
  width: 100%;
  padding: 24px 0;
  background: #b5b5b5;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.25);
`;

export const HeaderContent = styled.div`
  max-width: auto;
  margin: 0 10em auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    width: 70%;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  > img {
    margin-left: 80px;
    height: 80px;
    width: 240px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: 80px; */

  img {
    padding: 4px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }

  span {
    color: #f4ede8;
    font-weight: 550;
  }

  div {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    text-decoration: none;
    color: #545454;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: block;

  nav {
    margin: 0 10em auto 0;
    position: absolute;
    right: 0px;

    width: 256px;
    box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 20px;
    opacity: 1;
    visibility: ${(props) => props.display};
    padding: 0px;
    background: #eaeaea;
    border-radius: 5px;

    div {
      cursor: pointer;
      padding: 10px 20px 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #545454;

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
