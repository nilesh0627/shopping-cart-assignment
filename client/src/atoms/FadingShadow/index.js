import styled from "styled-components";
export const FadeShadow = styled.div`
  width: 100%;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0rem;
    background: radial-gradient(
      farthest-corner at 50% 0px,
      lightgray 0%,
      transparent 50%
    );
    width: 100%;
    height: 1rem;
    z-index: -5;
  }
`;
