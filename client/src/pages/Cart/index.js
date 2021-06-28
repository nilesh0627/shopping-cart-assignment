import React, { memo } from "react";
import { useState, useEffect } from "react";
import CartDesktop from "../../organisms/CartDesktop";
import CartTablet from "../../organisms/CartTablet";
function Cart({ isOpen, setIsOpen }) {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {windowDimensions.width > 900 && (
        <CartDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {windowDimensions.width <= 900 && (
        <CartTablet isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default memo(Cart);
