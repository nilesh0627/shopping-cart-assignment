import styled from "styled-components";
const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  padding-top: 3rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 900px) {
    padding-top: 0;
    margin-top: 7rem;
    background-color: var(--white);
  }
`;

const ModalContent = styled.div`
  background-color: var(--white);
  color: var(--black);
  margin: auto;
  margin-left: 45%;
  width: 40rem;
  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

export { Modal, ModalContent };
