import styled from "styled-components";
import Image from "../../atoms/image";
import { tablet, mobile } from "../../styles/device";
const ImageStyled = styled(Image)`
  width: 100%;

  @media ${tablet} {
    width: 12rem;
    height: 12rem;
    flex: 1;
  }
`;

const ArticleStyled = styled.article`
  width: 100%;
  border-bottom: 2px dashed var(--light-gray);
  padding: 1rem 0;
  strong {
    display: block;
    height: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    @media ${tablet} {
      font-size: 3rem;
      height: 8rem;
    }
  }

  @media ${tablet} {
    figure {
      display: flex;
    }
  }

  summary {
    background-color: var(--light-gray);
    padding: 0.5rem;
    height: 7.3rem;

    @media ${tablet} {
      height: 12rem;
      flex: 1;
      font-size: 3rem;
    }
  }

  summary > p {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.2rem;
    height: 6rem;
    text-align: center;

    @media ${tablet} {
      height: 80%;
      font-size: 1.4rem;
    }
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

  @media ${tablet} {
    background-color: var(--primary-color);
    justify-content: center;
    margin-top: 1.3rem;
    padding-bottom: 0.7rem;

    p {
      order: 2;
      color: var(--white);
      font-size: 1.3rem;
    }
  }
`;

export { ImageStyled, ArticleStyled, BuyStyled };
