import React, { memo } from "react";

function index({ className, source, alt, ...rest }) {
  const src = source ? source : "/static/images/category/beverages.png";

  return (
    <img
      className={className}
      // loading="lazy"
      src={process.env.PUBLIC_URL + src}
      alt={alt}
      height="auto"
      {...rest}
    />
  );
}

export default memo(index);
