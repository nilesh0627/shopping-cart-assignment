import styled from "styled-components";

export const StyledBody = styled.main`
  /* height: 73vh; */
  max-height: calc(100vh - 18rem);
  overflow-y: scroll;
  background-color: var(--light-gray);
  padding-top: 1rem;
`;

export const StyledTagLine = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--white);
  padding: 1rem;
  margin-bottom: 5rem;
  font-size: 1.2rem;
`;
