import React from "react";
import styled from "styled-components";
import Modal from "../../atoms/Modal";
import CartItem from "../CartItem";
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

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 0 1.4rem;
  div {
    color: var(--white);
  }
`;

const StyledBody = styled.main`
  background-color: var(--light-gray);
  display: grid;
  gap: 2rem;
  padding-top: 2rem;
`;

const StyledModal = styled(Modal)`
  /* height: 75rem; */
`;
function CartItems({ isOpen, setIsOpen, cart }) {
  return (
    <StyledModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <StyledHeader>
        <div>
          <strong>My Cart </strong>
          {cart.length ? <span>({cart.length} items)</span> : ""}
        </div>
        <Close onClick={() => setIsOpen(false)}>&times;</Close>
      </StyledHeader>
      {cart.length ? (
        <StyledBody>
          {cart.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </StyledBody>
      ) : (
        <h3>No Items in your Cart</h3>
      )}
    </StyledModal>
  );
}

export default CartItems;
