import styled from "styled-components";

export const StyledEmptyBody = styled.main`
  display: grid;
  text-align: center;
  gap: 1.2rem;
  align-content: center;
  justify-content: center;
  height: 65vh;
  max-height: calc(100vh - 18rem);
`;

export const StyledFooter = styled.footer`
  padding: 1rem;
  button {
    text-align: center;
    width: 100%;
    border-radius: 0.3rem;
    padding: 1rem;
  }
`;
