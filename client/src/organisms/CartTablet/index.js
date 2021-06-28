import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartHeader from "../../molecules/CartHeader";
import CartBody from "../../molecules/CartBody";
import CartFooter from "../../molecules/CartFooter";
import { useHistory } from "react-router-dom";
import { reduce } from "../../utils/reduce";
import { resetCart } from "../../redux/actions";

const StyledModal = styled.main`
  position: relative;
`;
function CartItems({ isOpen, setIsOpen }) {
  const { cart } = useSelector(({ cartData }) => cartData);
  const history = useHistory();
  const dispatch = useDispatch();
  const amount = reduce(cart, 0);

  const checkout = () => {
    history.push("/");
    setIsOpen(false);
    dispatch(resetCart());
  };

  return (
    <StyledModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <CartHeader cart={cart} setIsOpen={setIsOpen} />
      <CartBody cart={cart} />
      <CartFooter
        cart={cart}
        checkout={checkout}
        amount={amount}
        setIsOpen={setIsOpen}
      />
    </StyledModal>
  );
}

export default memo(CartItems);
