import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../redux/actions";
import Carousel from "../../molecules/Carousel";
function Banners() {
  const dispatch = useDispatch();
  const bannersData = useSelector(({ bannersData }) => bannersData);
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return <Carousel bannersData={bannersData} />;
}

export default memo(Banners);
