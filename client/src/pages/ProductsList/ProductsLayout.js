import styled from "styled-components";
import { mobile } from "../../styles/device";
export const ProductsLayout = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  gap: 2rem;

  @media ${mobile} {
    grid-template-columns: 1fr;
  }
`;
