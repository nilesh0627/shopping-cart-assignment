import styled from "styled-components";
import { mobile } from "../../styles/device";
export const FooterStyles = styled.footer`
  background-color: var(--light-gray);
  padding: 1rem 0;
  max-width: 100%;
  @media (max-width: 900px) {
    display: ${(props) => (props.isOpen ? "none" : "block")};
  }
  section {
    max-width: var(--max-width);
    margin: 0 auto;
  }
  @media ${mobile} {
    padding: 1rem 2rem;
  }
`;
