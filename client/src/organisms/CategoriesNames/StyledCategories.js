import styled, { css } from "styled-components";
const SideBarStyled = styled.aside`
  background-color: var(--light-gray);
`;

const ListItem = styled.li`
  list-style: none;
  color: var(--dark-gray);
  padding: 1rem 0;
  padding-left: 2rem;
  border-bottom: 1px solid var(--gray);
  cursor: pointer;
  :hover {
    color: var(--primary-color);
  }
  ${({ id, category }) =>
    id === category
      ? css`
          background-color: var(--primary-color);
          color: var(--white);
          :hover {
            color: var(--white);
          }
        `
      : ""};
`;

export { SideBarStyled, ListItem };
