import styled from "styled-components";

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
    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
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

  /* .prev {
    position: relative;
    left: 4rem;
  }

  .next {
    position: relative;
    right: 4rem;
  } */

  button {
    background-color: var(--black);
    color: #fff;
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
  }

  .dots > * {
    cursor: pointer;
  }
`;
