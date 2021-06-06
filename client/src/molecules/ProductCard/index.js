import React, { memo } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button";
import { ImageStyled, ArticleStyled, BuyStyled } from "./StyledProductCard";
import { addToCart } from "../../redux/actions";
const ProductCard = ({ product }) => {
  const { name, imageURL, description, price } = product;
  const dispatch = useDispatch();
  const buyNow = () => {
    dispatch(addToCart(product, "INCREMENT"));
  };
  return (
    <ArticleStyled>
      <strong>{name}</strong>
      <ImageStyled source={imageURL} alt={name} />
      <summary>
        <p>{description}</p>
      </summary>
      <BuyStyled>
        <p>MRP Rs. {price}</p>
        <Button handleClick={buyNow}>Buy Now</Button>
      </BuyStyled>
    </ArticleStyled>
  );
};

export default memo(ProductCard);
