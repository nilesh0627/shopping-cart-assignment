import React from "react";

function index({ className, source, alt }) {
  const src = source ? source : "/static/images/category/beverages.png";

  return (
    <img
      className={className}
      // loading="lazy"
      src={process.env.PUBLIC_URL + src}
      alt={alt}
      height="auto"
    />
  );
}

export default index;
