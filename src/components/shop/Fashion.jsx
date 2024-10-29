import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Fashion.css";
import { Link } from "react-router-dom";

const Fashion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fashionImgs, setFashionImgs] = useState([]);
  const [categorySelector, setCategorySelector] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch("/fashionProducts.json")
      .then((response) => response.json())
      .then((data) => {
        setFashionImgs(data);
        setCategorySelector(data.filter((item) => item.type === "male")); // Set initial categorySelector
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const arrivalsMenFashion = fashionImgs.filter((item) => item.type === "male");
  const arrivalsWomenFashion = fashionImgs.filter((item) => item.type === "female");
  const arrivalsWomenAccessories = fashionImgs.filter((item) => item.type === "christmas");
  const arrivalsMenAccessories = fashionImgs.filter((item) => item.type === "valentine");

  const categoryOptions = [
    { name: "Gift Cards", details: arrivalsMenFashion },
    { name: "Gift Bags", details: arrivalsWomenFashion },
    { name: "Christmas", details: arrivalsWomenAccessories },
    { name: "Valentine Cards", details: arrivalsMenAccessories },
  ];

  return (
    <div className="py-10">
      <h1 className="text-[30px] font-semibold text-center">Gallery</h1>
      <div className="flex justify-center items-center gap-1 mb-4">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight />
        <p>Gallery</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categoryOptions.map(({ name, details }, i) => (
          <div
            key={i}
            onClick={() => {
              setCategorySelector(details);
              setActive(i);
            }}
            className={`py-2 px-5 ${
              i === active ? "bg-black text-white" : "bg-[#FAFAFA] text-black"
            } rounded-[5px] shadow-md cursor-pointer`}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="gallery__container">
        {isLoading ? (
          <div className="grid-container-loading">
            {fashionImgs.map((_, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "loading-image row-span-2" : "loading-image"
                }`}
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid-container sm md">
            {categorySelector.map((item, i) => (
              <Link
                to={`/shop/${item.name}`}
                key={i}
                className={`image__container shadow-lg ${
                  i % 2 === 0 ? "gallery-image row-span-2" : "gallery-image"
                }`}
              >
                <img src={item.image} className="gallery-image" alt={item.name} />
                <div className="product__info">
                  <div className="product__price bg-red-700 w-[70px]">
                    <p>${item.price}</p>
                  </div>
                  <div className="product__name add-to-cart">
                    <p>{item.name}</p>
                    <button
                      className="cart__button"
                      onClick={() => handleClick(item.id)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fashion;
