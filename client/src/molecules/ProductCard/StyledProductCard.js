import styled from "styled-components";
import Image from "../../atoms/image";
import { tablet, mobile } from "../../styles/device";
const ImageStyled = styled(Image)`
  max-width: 100%;
  @media ${tablet} {
    width: 12rem;
    height: auto;
    grid-column: 1/2;
  }

  @media ${mobile} {
    width: 18rem;
    height: auto;
    grid-row: 1/-1;
  }
`;

const ArticleStyled = styled.article`
  display: grid;
  border-bottom: 2px dashed var(--light-gray);
  padding: 1rem 0;

  strong {
    display: block;
    height: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    @media ${tablet} {
      font-size: 2rem;
      height: 6rem;
    }
    @media ${mobile} {
      font-size: 2rem;
      height: 7rem;
    }
  }

  @media ${tablet} {
    figure {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media ${mobile} {
    figure {
      grid-template-rows: 1fr auto;
    }
  }

  summary {
    background-color: var(--light-gray);
    padding: 0.5rem;
    height: 7.3rem;

    @media ${tablet} {
      height: 12rem;
      grid-column: 2/-1;
      font-size: 3rem;
    }

    @media ${mobile} {
      grid-row: 1/2;
      min-height: 8rem;
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

    span {
      display: none;
    }
  }

  @media ${tablet} {
    background-color: var(--primary-color);
    justify-content: center;
    margin-top: 1.3rem;
    padding-bottom: 0.7rem;
    grid-column: 1/-1;
    font-size: 1.3rem !important;
    p {
      order: 2;
      color: var(--white);

      span {
        display: inline;
      }
    }
  }

  @media ${mobile} {
    grid-column: 2/-1;
    grid-row: 2/-1;
    margin-top: 0;
    font-size: 1.1rem !important;
  }
`;

export { ImageStyled, ArticleStyled, BuyStyled };
