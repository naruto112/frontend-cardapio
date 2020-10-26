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

      .selected {
        background: #e1faec;
        border: 2px solid #34cb79;
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
