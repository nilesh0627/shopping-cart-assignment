import React, { memo } from "react";
import {
  StyledGrid,
  StyledArticle,
  StyledCartImage,
  StyledPrice,
} from "./styledCartItem";
import {
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiOutlineClose,
} from "react-icons/ai";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
const CartItem = ({ cartItem }) => {
  const { name, imageURL, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <StyledGrid>
      <StyledCartImage source={imageURL} alt={name} />
      <StyledArticle>
        <strong>{name}</strong>
        <div>
          <AiFillMinusSquare
            size={20}
            color="#B93153"
            onClick={() => {
              dispatch(addToCart(cartItem, "DECREMENT"));
            }}
          />{" "}
          <div>{quantity}</div>
          <AiFillPlusSquare
            size={20}
            color="#B93153"
            onClick={() => {
              dispatch(addToCart(cartItem, "INCREMENT"));
            }}
          />
          <AiOutlineClose size={16} />
          <div>Rs. {price}</div>
        </div>
      </StyledArticle>
      <StyledPrice>Rs.{price * quantity}</StyledPrice>
    </StyledGrid>
  );
};

export default memo(CartItem);
