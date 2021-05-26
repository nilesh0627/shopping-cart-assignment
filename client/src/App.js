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
