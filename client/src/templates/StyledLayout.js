import styled from "styled-components";
import { mobile } from "../styles/device";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Main = styled.main`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 2fr;
  align-items: center;
  gap: 3rem;

  @media ${mobile} {
    grid-template-columns: 2rem 1fr 2rem;
  }

  section {
    grid-column: 2/3;
  }

  section > summary {
    font-size: 1.4rem;
    font-weight: 500;
    padding-top: 1.5rem;
  }

  form {
    grid-column: 3/4;

    @media ${mobile} {
      grid-column: 2/3;
    }
  }
`;

export { LayoutStyles, Main };
