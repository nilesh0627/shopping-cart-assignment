import React, { memo } from "react";
import { useSelector } from "react-redux";
import Header from "../../molecules/Header";
function HeaderContainer({ setIsOpen }) {
  const { cart } = useSelector(({ cartData }) => cartData);
  return <Header setIsOpen={setIsOpen} cart={cart} />;
}

export default memo(HeaderContainer);
