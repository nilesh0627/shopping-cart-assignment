import React from "react";
import MainLayout from "../../templates/MainLayout";
import Carousel from "../../organisms/Banners";
import Categories from "../../organisms/Categories";
function index() {
  return (
    <MainLayout>
      <Carousel />
      <Categories />
    </MainLayout>
  );
}

export default index;
