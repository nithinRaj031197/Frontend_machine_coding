import { useState, useMemo } from "react";
import data from "./products.json";

const usePaginationCarousel = (itemsPerPage) => {
  const [currentItem, setCurrentItem] = useState(0);

  const totalItems = useMemo(() => Math.ceil(data?.products.length / itemsPerPage), [itemsPerPage]);

  const startIndex = currentItem * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = useMemo(() => data?.products.slice(startIndex, endIndex), [startIndex, endIndex]);

  const nextHandler = () => {
    if (currentItem >= totalItems - 1) {
      return;
    }
    setCurrentItem((prev) => prev + 1);
  };

  const previousHandler = () => {
    if (currentItem === 0) {
      return;
    }
    setCurrentItem((prev) => prev - 1);
  };

  return {
    items: currentItems,
    previousHandler,
    nextHandler,
    isPrevious: currentItem === 0,
    isNext: currentItem >= totalItems - 1,
    currentItem,
  };
};

export default usePaginationCarousel;
