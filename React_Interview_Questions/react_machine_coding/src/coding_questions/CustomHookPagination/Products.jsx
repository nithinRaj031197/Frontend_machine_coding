import React from "react";
import classes from "./products.module.css";

import usePaginationCarousel from "./usePaginationCarousel";

const Products = () => {
  const {
    items: products,
    currentItem: currentPage,
    nextHandler,
    previousHandler,
    isPrevious,
    isNext,
  } = usePaginationCarousel(6);

  return (
    <>
      <div className={classes.products}>
        {products?.map((product) => {
          return (
            <div key={product.id} className={classes.card}>
              <img src={product.thumbnail} alt={product.title} className={classes.image} />
              <div className={classes.product_details}>
                <p>{product.title}</p>
                <p>
                  <i>$ {product.price}</i>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.pagination_container}>
        <button onClick={previousHandler} disabled={isPrevious}>
          Prev
        </button>
        <p>{currentPage + 1} </p>
        <button onClick={nextHandler} disabled={isNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
