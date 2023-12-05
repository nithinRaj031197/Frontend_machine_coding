import React, { useState } from "react";
import classes from "./carousel.module.css";

import data from "./products.json";
import usePaginationCarousel from "./usePaginationCarousel";

const Carousel = () => {
  const { items: products, nextHandler, previousHandler, isPrevious, isNext } = usePaginationCarousel(1);

  return (
    <div className={classes.carousel}>
      {products.map((product) => {
        return (
          <div key={product.id} className={classes.imageContainer}>
            <div
              className={`${classes.icon}  ${classes.left_arrow}  ${isPrevious ? classes.notAllowed : ""}`}
              onClick={previousHandler}
            >
              &larr;
            </div>
            <div
              className={`${classes.icon}  ${classes.right_arrow} ${isNext ? classes.notAllowed : ""}`}
              onClick={nextHandler}
            >
              &rarr;
            </div>
            <img src={product.thumbnail} className={classes.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
