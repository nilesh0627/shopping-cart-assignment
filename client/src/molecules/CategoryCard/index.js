import React from "react";
import { Link } from "react-router-dom";
import Image from "../../atoms/image";
import Button from "../../atoms/Button";
import { CategoryStyles } from "./CardStyles";
function Category({ explore, id, name, description, imageUrl, orderType }) {
  return (
    <CategoryStyles className="fade-shadow" orderType={orderType}>
      <Image className="categoryImage" source={imageUrl} alt={name} />

      <article className="categoryDetail">
        <strong className="p-2">{name}</strong>
        <summary className="p-2">{description}</summary>
        <Link to={`/products/${id}`}>
          <Button type="button">{`Explore ${explore}`}</Button>
        </Link>
      </article>
    </CategoryStyles>
  );
}

export default Category;
