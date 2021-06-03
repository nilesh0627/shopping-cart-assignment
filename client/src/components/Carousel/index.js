import React, { useState, useEffect, memo } from "react";
import { connect } from "react-redux";
import { BsDot } from "react-icons/bs";
import { getBanners } from "../../redux/actions";
import Image from "../../atoms/image";
import { CarouselStyles } from "./CarouselStyles";
function Carousel({ getBanners, bannersData }) {
  const { banners, error, loading } = bannersData;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getBanners();
  }, []);
  const next = (increment) =>
    setActiveIndex(
      (activeIndex) => (activeIndex + increment) % banners.data.length
    );
  const prev = (decrement) =>
    setActiveIndex(
      (activeIndex) =>
        (activeIndex + banners.data.length - decrement) % banners.data.length
    );

  const goToIndex = (index) => setActiveIndex(index);

  const slides = banners?.data?.map((banner, index) => {
    return (
      <section
        key={banner.id}
        className={activeIndex === index ? "fade-in" : "hide"}
      >
        <Image
          className="slide"
          source={banner.bannerImageUrl}
          alt={banner.bannerImageAlt}
        />
      </section>
    );
  });

  const dots = banners?.data?.map((banner, index) => {
    return (
      <BsDot
        key={banner.id}
        onClick={() => goToIndex(index)}
        color={activeIndex === index ? "black" : "lightgray"}
        size={26}
      />
    );
  });

  return (
    <CarouselStyles className="fade-shadow">
      <section className="container">
        <button className="prev" onClick={() => prev(1)}>
          Prev
        </button>
        {slides}
        <button className="next" onClick={() => next(1)}>
          Next
        </button>
      </section>
      <div className="dots">{dots}</div>
    </CarouselStyles>
  );
}

function mapStateToProps({ bannersData }) {
  return {
    bannersData,
  };
}

const mapDispatchToProps = {
  getBanners: getBanners,
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(Carousel));
