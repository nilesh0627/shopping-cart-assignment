import styled from "styled-components";

export const CategoriesStyles = styled.main`
  display: grid;
  gap: 1rem;

  .fade-shadow:last-child {
    &::after {
      background: none;
    }
  }
`;
