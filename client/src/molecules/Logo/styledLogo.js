import styled from "styled-components";
import { mobile } from "../../styles/device";
export const LogoStyles = styled.figure`
  flex: 1.2;
  img {
    max-width: 14rem;

    @media ${mobile} {
      max-width: 7rem;
    }
  }
`;
