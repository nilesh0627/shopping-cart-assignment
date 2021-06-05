import styled from "styled-components";
export const CategoryStyles = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .categoryImage {
    width: 100%;
    max-width: 30rem;
    height: auto;
    object-fit: contain;
    order: ${({ orderType }) => (orderType ? "" : 2)};
  }

  .categoryDetail {
    flex: auto;
    text-align: center;
  }

  .p-2 {
    display: block;
    padding-bottom: 0.8rem;
  }
`;
