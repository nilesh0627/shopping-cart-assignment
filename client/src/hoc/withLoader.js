import React from "react";

export const withLoader = (Component) => {
  function WithLoader(props) {
    const { loading } = props;
    if (loading) return <h2>Loading...</h2>;
    else return <Component {...props} />;
  }
  return WithLoader;
};
