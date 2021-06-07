import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--white);
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledCartImag = styled(Image)`
  grid-column: 1/2;
  grid-row: 1/-1;
  width: 75%;
`;

const StyledArticle = styled.article`
  grid-column: 2/4;
  grid-row: 1/-1;
  display: grid;

  div {
    display: flex;
  }

  div > *:nth-child(odd) {
    cursor: pointer;
  }

  div > div {
    padding: 0 1.3rem;
  }
`;

const StyledPrice = styled.article`
  grid-row: 2/-1;
  grid-column: 4/-1;
`;
const CartItem = ({ cartItem }) => {
  const { name, imageURL, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <StyledGrid>
      <StyledCartImag source={imageURL} alt={name} />
      <StyledArticle>
        <strong>{name}</strong>
        <div>
          <AiFillMinusCircle
            size={20}
            color="#B93153"
            onClick={() => dispatch(addToCart(cartItem, "DECREMENT"))}
          />{" "}
          <div>{quantity}</div>
          <AiFillPlusCircle
            size={20}
            color="#B93153"
            onClick={() => dispatch(addToCart(cartItem, "INCREMENT"))}
          />
          <div>Rs. {price}</div>
        </div>
      </StyledArticle>
      <StyledPrice>Rs.{price * quantity}</StyledPrice>
    </StyledGrid>
  );
};

export default CartItem;
