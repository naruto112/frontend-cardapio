import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 20px 0;
    width: 900px;
    text-align: center;
    margin-top: 60px;

    h1 {
      margin-bottom: 40px;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .accep-terms {
      width: auto;
      height: 40px;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      span {
        margin-top: 2px;
        margin-left: 10px;
      }
    }

    a {
      color: #4e9cff;

      &:hover {
        color: ${shade(0.2, "#4e9cff")};
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
