import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--white);
  text-align: center;
  padding: 1.5rem;

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
