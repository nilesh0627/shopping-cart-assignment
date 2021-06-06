import React from "react";
import Button from "../../atoms/Button";

import { ImageStyled, ArticleStyled, BuyStyled } from "./StyledProductCard";

const index = ({ product }) => {
  const { name, imageURL, description, price } = product;
  return (
    <ArticleStyled>
      <strong>{name}</strong>
      <ImageStyled source={imageURL} alt={name} />
      <summary>
        <p>{description}</p>
      </summary>
      <BuyStyled>
        <p>MRP Rs. {price}</p>
        <Button>Buy Now</Button>
      </BuyStyled>
    </ArticleStyled>
  );
};

export default index;
