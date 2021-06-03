import "./App.css";
import Routes from "./routes/Routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html{
    --primary-color:#B93153;
    --black:#202626;
    --olive:#9DAC54;
    --light-gray:#E8E9E8;
    --blue:#4BA0B0;
    --max-width:1000px;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    font-family: "dosis";
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: var(---black);
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
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default App;
