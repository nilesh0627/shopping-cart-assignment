import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button";
import { ImageStyled, ArticleStyled, BuyStyled } from "./StyledProductCard";
import { addToCart } from "../../redux/actions";
import Notification from "../../atoms/Notification";
const ProductCard = ({ product }) => {
  const { name, imageURL, description, price } = product;
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const buyNow = () => {
    dispatch(addToCart(product, "INCREMENT"));
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };
  return (
    <ArticleStyled>
      <strong>{name}</strong>
      <figure>
        <ImageStyled source={imageURL} alt={name} />
        <summary>
          <p>{description}</p>
        </summary>
        <BuyStyled>
          <p>
            <span> @ </span>MRP Rs. {price}
          </p>
          <Button handleClick={buyNow}>Buy Now</Button>
        </BuyStyled>
      </figure>
      {clicked && (
        <Notification message={` ${name} Added to Cart Successfully`} />
      )}
    </ArticleStyled>
  );
};

export default memo(ProductCard);
