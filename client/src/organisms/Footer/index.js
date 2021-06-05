import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background-color: var(--light-gray);
  padding: 1rem 0;
  section {
    width: var(--max-width);
    margin: 0 auto;
  }
`;
function Footer() {
  return (
    <FooterStyles>
      <section>
        CopyRight &copy; 2011-2018 Sabka Bazaar Groceries Supplies Pvt. Ltd
      </section>
    </FooterStyles>
  );
}

export default Footer;
