import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import { getBanners } from "../../redux/actions";
import Carousel from "../../molecules/Carousel";
function Banners({ getBanners, bannersData }) {
  useEffect(() => {
    getBanners();
  }, []);

  return <Carousel bannersData={bannersData} />;
}

function mapStateToProps({ bannersData }) {
  return {
    bannersData,
  };
}

const mapDispatchToProps = {
  getBanners: getBanners,
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(Banners));
