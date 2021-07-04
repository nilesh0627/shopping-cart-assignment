import React from "react";
import { useSelector } from "react-redux";
import Header from "../../molecules/Header";
function HeaderContainer() {
  const { cart } = useSelector(({ cartData }) => cartData);
  return <Header cart={cart} />;
}

export default HeaderContainer;
