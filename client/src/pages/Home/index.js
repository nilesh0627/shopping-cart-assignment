import React, { memo } from "react";
import Carousel from "../../organisms/Banners";
import Categories from "../../organisms/Categories";
function index() {
  return (
    <>
      <Carousel />
      <Categories />
    </>
  );
}

export default memo(index);
