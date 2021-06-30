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
`;

const ModalContent = styled.div`
  background-color: var(--white);
  color: var(--black);
  margin: auto;
  margin-right: 30rem;
  width: 33%;
`;

export { Modal, ModalContent };
