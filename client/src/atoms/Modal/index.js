import React, { memo } from "react";
import { Modal, ModalContent } from "./StyledModal";
const index = ({ isOpen, children }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default memo(index);
