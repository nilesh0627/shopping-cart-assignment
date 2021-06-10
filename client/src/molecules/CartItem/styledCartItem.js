import styled from "styled-components";
import Image from "../../atoms/Image";
const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--white);
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledCartImage = styled(Image)`
  grid-column: 1/2;
  grid-row: 1/-1;
  width: 75%;
`;

const StyledArticle = styled.article`
  grid-column: 2/4;
  grid-row: 1/-1;
  display: grid;

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
  grid-row: 2/-1;
  grid-column: 4/-1;
`;

export { StyledGrid, StyledArticle, StyledCartImage, StyledPrice };
