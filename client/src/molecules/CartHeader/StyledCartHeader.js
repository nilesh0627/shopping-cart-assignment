import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 1.4rem;
  position: sticky;
  article {
    display: flex;
    align-items: center;
    color: var(--white);
    h2 {
      padding-right: 1.5rem;
    }
    @media (max-width: 900px) {
      color: var(--black);
    }
  }

  @media (max-width: 900px) {
    background-color: var(--white);
  }
`;
const Close = styled.span`
  color: var(--white);
  text-align: right;

  :hover,
  :focus {
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    color: var(--black);
  }
`;

export { StyledHeader, Close };
