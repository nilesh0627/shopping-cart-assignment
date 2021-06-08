import React from "react";
import Button from "../../atoms/Button";
import CartItem from "../CartItem";
import { EmptyBody, EmptyFooter } from "../CartEmpty";
import { useHistory } from "react-router-dom";
import { reduce } from "../../utils/reduce";
import {
  Close,
  StyledBody,
  StyledModal,
  StyledFooter,
  StyledHeader,
} from "./StyledCart";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/actions";
function CartItems({ isOpen, setIsOpen, cart }) {
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
        <EmptyBody />
      )}

      {cart.length ? (
        <StyledFooter>
          <div>Promo code can be applied on payment page</div>
          <Button handleClick={checkout}>
            <div>Proceed To checkout</div>
            <div>Rs. {amount}</div>
          </Button>
        </StyledFooter>
      ) : (
        <EmptyFooter setIsOpen={setIsOpen} />
      )}
    </StyledModal>
  );
}

export default CartItems;
