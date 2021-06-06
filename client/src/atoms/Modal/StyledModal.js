import styled from "styled-components";
const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 10rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  background-color: var(--white);
  color: var(--black);
  margin: auto;
  width: 35%;
`;

export { Modal, ModalContent };
