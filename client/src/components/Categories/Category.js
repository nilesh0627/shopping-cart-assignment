import React from "react";
import Image from "../../atoms/image";
import Button from "../../atoms/Button";
import styled from "styled-components";

const CategoryStyles = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .categoryImage {
    width: 100%;
    max-width: 30rem;
    height: auto;
    object-fit: contain;
    order: ${({ orderType }) => (orderType ? "" : 2)};
  }

  .categoryDetail {
    flex: auto;
    text-align: center;
  }

  .p-2 {
    display: block;
    padding-bottom: 0.8rem;
  }
`;
function Category({ key, name, description, imageUrl, orderType }) {
  return (
    <CategoryStyles className="fade-shadow" orderType={orderType}>
      <Image className="categoryImage" source={imageUrl} alt={name} />

      <article class="categoryDetail">
        <strong className="p-2">{name}</strong>
        <summary className="p-2">{description}</summary>
        <Button>{`Explore ${key}`}</Button>
      </article>
    </CategoryStyles>
  );
}

export default Category;
