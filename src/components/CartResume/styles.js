import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: max-content;
  margin-top: 30px;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      "title title"
      "items items-price"
      "tax tax-price";

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .tax {
      grid-area: tax;
    }

    .tax-price {
      grid-area: tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
  }
`;
