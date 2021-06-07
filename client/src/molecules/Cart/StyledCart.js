import styled from "styled-components";
import Modal from "../../atoms/Modal";
const Close = styled.span`
  color: var(--light-gray);
  text-align: right;
  font-size: 3.8rem;

  :hover,
  :focus {
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledModal = styled(Modal)`
  position: relative;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 0 1.4rem;
  position: sticky;
  div {
    color: var(--white);
  }
`;

const StyledBody = styled.main`
  height: 70vh;
  max-height: calc(100vh - 18rem);
  overflow-y: auto;
  background-color: var(--light-gray);
  padding-top: 1rem;
`;
const StyledFooter = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 1rem;

  > div {
    padding-bottom: 1rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-radius: 0.3rem;
  }
`;

export { Close, StyledBody, StyledModal, StyledFooter, StyledHeader };
