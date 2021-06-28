import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 0 1.4rem;
  position: sticky;
  div {
    color: var(--white);
  }
`;
const Close = styled.span`
  color: var(--light-gray);
  text-align: right;
  font-size: 3.8rem;

  :hover,
  :focus {
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
  }
`;

export { StyledHeader, Close };
