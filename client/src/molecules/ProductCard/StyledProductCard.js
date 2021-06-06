import styled from "styled-components";
import Image from "../../atoms/image";
const ImageStyled = styled(Image)`
  width: 100%;
`;

const ArticleStyled = styled.article`
  width: 100%;
  border-bottom: 2px dashed var(--light-gray);
  padding: 1rem 0;
  strong {
    display: block;
    height: 6rem;
  }

  summary {
    background-color: var(--light-gray);
    padding: 0.5rem;
    height: 7.3rem;
  }

  summary > p {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.2rem;
    height: 6rem;
    text-align: center;
  }
`;

const BuyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  p {
    font-size: 1rem;
  }
`;

export { ImageStyled, ArticleStyled, BuyStyled };
