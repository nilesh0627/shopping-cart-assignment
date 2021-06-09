import styled from "styled-components";
import { mobile } from "../../styles/device";
export const CarouselStyles = styled.section`
  margin-top: 1rem;
  .container {
    display: flex;
    align-items: center;
  }

  .hide {
    display: none;
  }
  .fade-in {
    animation: fadeIn ease 3s;
    -webkit-animation: fadeIn ease 3s;
    -moz-animation: fadeIn ease 3s;
    -o-animation: fadeIn ease 3s;
    -ms-animation: fadeIn ease 3s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .prev {
    position: relative;
    left: 4rem;
    z-index: 100;
  }

  .next {
    position: relative;
    right: 4rem;
    z-index: 100;
  }

  button {
    background-color: var(--black);
    color: var(--white);
    opacity: 0.5;
    padding: 0.3rem 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .dots {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 4rem;

    @media ${mobile} {
      bottom: -2rem;
    }
  }

  .dots > * {
    cursor: pointer;
  }

  .slide {
    width: 100%;
  }
`;
