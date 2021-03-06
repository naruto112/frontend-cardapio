import styled, { css } from "styled-components";

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  width: 368px;
  background: #f0f0f5;
  border-radius: 8px;

  header {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    ${(props) =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.btn-cart {
      button {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 122px;
        height: 40px;
        opacity: 0.8;
        border-radius: 5px;
        border: none;
        background: rgba(255, 255, 255, 0.8);
        transition-duration: 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    div.btn-cart-available {
      button {
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 122px;
        height: 40px;
        opacity: 0.8;
        border-radius: 5px;
        border: none;
        background: rgba(255, 255, 255, 0.8);
        opacity: 0.3;
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
        font-size: 14px;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }
`;
