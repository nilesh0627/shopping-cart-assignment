import React from "react";

function index({ source, alt }) {
  return (
    <img
      loading="lazy"
      src={process.env.PUBLIC_URL + source}
      alt={alt}
      width="100%"
      height="auto"
    />
  );
}

export default index;
