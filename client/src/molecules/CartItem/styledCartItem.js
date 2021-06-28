import styled from "styled-components";
import Image from "../../atoms/Image";
const StyledGrid = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--white);
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledCartImage = styled(Image)`
  max-width: 8rem;

  @media (max-width: 900px) {
    max-width: 8rem;
    min-width: 8rem;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
  }

  div > *:nth-child(odd) {
    cursor: pointer;
  }

  div > div {
    padding: 0 1.3rem;
  }
`;

const StyledPrice = styled.article`
  align-self: flex-end;
  margin-left: auto;
`;

export { StyledGrid, StyledArticle, StyledCartImage, StyledPrice };
