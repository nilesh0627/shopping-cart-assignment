import React from "react";
import styled from "styled-components";
const Main = styled.main`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 2fr;
  align-items: center;
  gap: 3rem;

  section {
    grid-column: 2/3;
  }

  section > div {
    font-size: 1.4rem;
    font-weight: 500;
    padding-top: 1.5rem;
  }

  form {
    grid-column: 3/4;
  }
`;
function AuthenticationLayout({ title, summary, children }) {
  return (
    <Main>
      <section>
        <h2>{title}</h2>
        <div>{summary}</div>
      </section>
      {children}
    </Main>
  );
}

export default AuthenticationLayout;
