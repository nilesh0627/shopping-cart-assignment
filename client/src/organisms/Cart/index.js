import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartHeader from "../../molecules/CartHeader";
import CartBody from "../../molecules/CartBody";
import CartFooter from "../../molecules/CartFooter";
import { useHistory } from "react-router-dom";
import { reduce } from "../../utils/reduce";
import { resetCart } from "../../redux/actions";
import { useDimensions } from "../../utils/useDimensions";
import { StyledCartModal, StyledCartSection } from "./StyledCart";
function CartItems({ isOpen, setIsOpen }) {
  const windowDimensions = useDimensions();
  const { cart } = useSelector(({ cartData }) => cartData);
  const history = useHistory();
  const dispatch = useDispatch();
  const amount = reduce(cart, 0);
  const StyledCart =
    windowDimensions.width > 900 ? StyledCartModal : StyledCartSection;
  const checkout = () => {
    history.push("/");
    setIsOpen(false);
    dispatch(resetCart());
  };
  return (
    <StyledCart isOpen={isOpen} setIsOpen={setIsOpen}>
      <CartHeader cart={cart} setIsOpen={setIsOpen} />
      <CartBody cart={cart} />
      <CartFooter
        cart={cart}
        checkout={checkout}
        amount={amount}
        setIsOpen={setIsOpen}
      />
    </StyledCart>
  );
}

export default memo(CartItems);
