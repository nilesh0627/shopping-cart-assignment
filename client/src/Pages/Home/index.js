import React from "react";
import Layout from "../../Layout";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
function index() {
  return (
    <Layout>
      <Carousel />
      <Categories />
    </Layout>
  );
}

export default index;
