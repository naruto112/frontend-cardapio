import styled from "styled-components";
import { shade } from "polished";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -160px auto 0;

  form {
    margin: 20px 0;
    width: 900px;
    text-align: center;
    margin-top: 60px;

    h1 {
      margin-bottom: 40px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 34px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    color: #131313;
    display: block;

    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#868686")};
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  .circle {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }

    &:hover {
      background: ${shade(0.2, "#312e38")};
    }
  }
`;

export const ColorPick = styled.div`
  display: flex;
  align-items: center;

  > div {
    cursor: pointer;
    margin-left: 20px;
  }

  justify-content: flex-end;

  width: 100%;

  .pallete-color {
    cursor: pointer;
    position: absolute;
    margin-top: 20px;
  }
`;
