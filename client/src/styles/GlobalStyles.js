import { createGlobalStyle } from "styled-components";
import { mobile, tablet } from "./device";
export const GlobalStyles = createGlobalStyle`
  html{
    --primary-color:#B93153;
    --black:#202626;
    --olive:#9DAC54;
    --light-gray:#E8E9E8;
    --dark-gray:#586074;
    --blue:#00ead3;
    --white:#fff;
    --gray:#afb9c8;
    --red:red;
    --max-width:1024px;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  @media ${tablet}{
    html{
      --max-width:100%;
    }
  }

  @media ${mobile}{
    html{
      --max-width:100%;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "dosis";
    font-size: 1.5rem;
  }
  a{
    text-decoration: none;
    color: var(---black);
  }

  ::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-track {
  background: var(--white); 
}
 
::-webkit-scrollbar-thumb {
  background: var(--dark-gray); 
}

::-webkit-scrollbar-thumb:hover {
  background: var(--black); 
}

  .shadow{
  -webkit-box-shadow: 0 8px 6px -6px rgba(0,0,0,0.3);
  -moz-box-shadow: 0 8px 6px -6px rgba(0,0,0,0.3);
  box-shadow: 0 8px 6px -6px rgba(0,0,0,0.2);
  }

  .fade-shadow{
    width: 100%;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0rem;
    background: radial-gradient(
      farthest-corner at 50% 0px,
      gray 0%,
      transparent 50%
    );
    width: 100%;
    height: 1rem;
    z-index: -5;
  }
  }

`;
