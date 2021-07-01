import styled from "styled-components";
import { mobile } from "../../styles/device";
export const HeaderStyles = styled.header`
  max-width: 100%;
  .container {
    display: flex;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    @media ${mobile} {
      margin-bottom: 1.3rem;
      font-size: 1.3rem;
    }
    @media (max-width: 285px) {
      font-size: 1rem;
    }
    > nav {
      padding: 0 1rem;
    }
  }
  nav {
    flex: 4;
    display: flex;
    align-self: center;
    gap: 2rem;
  }
  .cart {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
