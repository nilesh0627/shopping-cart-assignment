import styled from "styled-components";
import { mobile } from "../../styles/device";
export const HeaderStyles = styled.header`
  /* box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1); */

  .container {
    display: flex;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;

    @media ${mobile} {
      margin-bottom: 1.3rem;
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

    nav {
      font-size: 1.2rem;
    }

    .items {
      display: flex;
      align-items: center;
      background-color: var(--light-gray);
      padding: 1rem;
      padding-bottom: 1.5rem;
      cursor: pointer;

      div {
        width: 6rem;
        padding-left: 1rem;
      }
    }
  }
`;
