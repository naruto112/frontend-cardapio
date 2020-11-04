import styled from "styled-components";

export const HeaderBody = styled.header`
  width: auto;
  padding: 10px 0;
  background: #ffffff;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.04));
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 30px;
        height: 30px;
        color: #c9ced6;
      }
      button {
        background: none;
        border: none;
      }
    }

    .link-cardapio {
      padding-left: 70px;
      span {
        margin-left: 10px;
      }
      div {
        cursor: pointer;
      }
    }

    .logo {
      margin-left: 80px;
      height: 80px;
      width: 240px;
    }

    .circle {
      margin-right: 0px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;

  svg {
    margin-right: 20px;
    margin-left: 20px;
    color: #a6acbe;
    cursor: pointer;
  }

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      color: #a6acbe;
    }

    a {
      text-decoration: none;
      color: #000000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Division = styled.div`
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #eff4f7;
`;

export const Alert = styled.div`
  div {
    width: 300px;
    position: absolute;
    display: flex;
    right: 140px;
    top: 90px;
    z-index: 1;
    background: #fca311;
    border-radius: 3px;
    padding: 14px;
    box-shadow: 0px 16px 4px rgba(0, 0, 0, 0.05);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
  }

  .triangule {
    position: absolute;
    display: flex;
    right: 250px;
    top: 68px;
    z-index: 0;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border-bottom: 25px solid #fca311;
  }
`;
