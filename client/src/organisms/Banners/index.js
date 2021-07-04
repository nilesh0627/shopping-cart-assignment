import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../redux/actions";
import Carousel from "../../molecules/Carousel";
import { withLoader } from "../../hoc";

const WithLoader = withLoader(Carousel);
function Banners() {
  const dispatch = useDispatch();
  const bannersData = useSelector(({ bannersData }) => bannersData);
  const { loading } = bannersData;
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return <WithLoader loading={loading} bannersData={bannersData} />;
}

export default Banners;
