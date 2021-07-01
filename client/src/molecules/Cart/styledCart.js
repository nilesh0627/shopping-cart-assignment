import styled from "styled-components";
import Modal from "../../atoms/Modal";

const StyledCartModal = styled(Modal)`
  position: relative;
`;
const StyledCartSection = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  height: 90vh;
  padding: 1rem 0;
`;

export { StyledCartModal, StyledCartSection };
