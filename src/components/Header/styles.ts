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
      svg {
        width: 30px;
        height: 30px;
        color: #c9ced6;
      }
    }

    .logo {
      margin-left: 80px;
      height: 80px;
      width: 240px;
    }

    .circle {
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
