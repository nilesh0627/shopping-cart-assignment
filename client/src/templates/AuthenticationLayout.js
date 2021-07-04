import React, { memo } from "react";
import { Main } from "./StyledLayout";
function AuthenticationLayout({ title, summary, children }) {
  return (
    <Main>
      <section>
        <h2>{title}</h2>
        <summary>{summary}</summary>
      </section>
      {children}
    </Main>
  );
}

export default memo(AuthenticationLayout);
