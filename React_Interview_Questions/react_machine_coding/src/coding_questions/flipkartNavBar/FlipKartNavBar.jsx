import React, { useState } from "react";
import data from "./flipkart.json";

const FlipKartNavBar = () => {
  const navLinks = data?.navLinks;

  const [currentCategory, setCurrentCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleMouseHover = (id, type) => {
    if (type === "category") {
      setCurrentCategory(id);
    } else {
      setSubCategory(id);
    }
  };

  const handleMouseLeave = () => {
    setCurrentCategory("");
    setSubCategory("");
  };

  return (
    <div className="flex justify-around mt-10" onMouseLeave={() => handleMouseLeave()}>
      {navLinks?.map((navLink, index) => {
        return (
          <div key={index}>
            <div
              className="p-16  cursor-pointer w-60 text-center shadow-lg bg-gray-200"
              onMouseOver={() => handleMouseHover(navLink.category, "category")}
            >
              {navLink.category}
              <p className="text-xl font-bold">{currentCategory === navLink.category ? <>&darr;</> : <>&uarr;</>}</p>
            </div>
            {currentCategory === navLink.category && navLink?.subCategories.length > 0 && (
              <div className="relative flex">
                <div className="shadow-md bg-slate-100 w-60 rounded p-2 ml-[-45%] mr-[50%]">
                  {navLink?.subCategories.map((subCat, index) => {
                    return (
                      <div key={index} className="">
                        <p
                          className="py-2 px-3 cursor-pointer"
                          onMouseOver={() => handleMouseHover(subCat.name, "subcategory")}
                        >
                          {subCat.name}
                        </p>
                        {subCategory === subCat.name && subCat?.items.length > 0 && (
                          <div className="absolute left-[45%] rounded top-0 shadow p-2 w-60 z-3 bg-slate-300">
                            {subCat?.items.map((element, index) => {
                              return (
                                <div key={index}>
                                  <p className="py-2 px-3 cursor-pointer">{element}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FlipKartNavBar;
