import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 1rem;

  > div {
    padding-bottom: 1rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-radius: 0.3rem;
  }
`;
