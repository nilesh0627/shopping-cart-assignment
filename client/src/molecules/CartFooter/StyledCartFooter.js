import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--white);
  text-align: center;
  padding: 1.5rem;

  @media (max-width: 900px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 0;
  }

  > div {
    padding: 1rem 0;
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-radius: 0.3rem;
  }
`;
