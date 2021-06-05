import React from "react";
import Image from "../../atoms/image";
import Button from "../../atoms/Button";
import { CategoryStyles } from "./CardStyles";
function Category({ explore, name, description, imageUrl, orderType }) {
  return (
    <CategoryStyles className="fade-shadow" orderType={orderType}>
      <Image className="categoryImage" source={imageUrl} alt={name} />

      <article className="categoryDetail">
        <strong className="p-2">{name}</strong>
        <summary className="p-2">{description}</summary>
        <Button type="button">{`Explore ${explore}`}</Button>
      </article>
    </CategoryStyles>
  );
}

export default Category;
