import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
  cursor: pointer;

  margin-bottom: 20px;
  background: #fff;
  width: 380px;
  margin-left: 30px;
  height: 151px;
  border-radius: 9px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  transition: 0.4s;

  &:hover {
    box-shadow: 1px 1px 1px rgba(0.2, 0.2, 0.2, 0.2);
    background: ${shade(0.01, "#fff")};
  }

  header {
    border-radius: 9px 0px 0px 9px;
    width: 156px;
    height: 151px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 239px;
  height: 151px;

  div {
    display: flex;
    align-items: center;
    width: 40%;
    height: 30px;
  }

  .top-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 13px;
    width: 210px;
    height: 65px;
    h2 {
      font-size: 16px;
      width: 90px;
    }
    strong {
      font-size: 12px;
    }
  }

  .middle-card {
    margin-left: 13px;
    width: 230px;
    height: 50px;
    article {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.01em;

      color: #8c93a9;
    }
  }

  .bottom-card {
    display: flex;
    justify-content: space-between;
    margin-left: 13px;
    width: 230px;

    span {
      font-weight: 600;
      font-size: 18px;
      color: #4e4e4e;
    }
  }

  div.availability-container {
    display: flex;
    align-items: center;

    p {
      color: #3d3d4d;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 22px;
      margin-left: 12px;

      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
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
          height: 10px;
          width: 25px;
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
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
      }
    }
  }
`;
