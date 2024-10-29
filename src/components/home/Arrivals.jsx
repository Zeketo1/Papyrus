import { useEffect, useState } from "react";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";

const Arrivals = () => {
  const [fashionImgs, setFashionImgs] = useState([]);
  useEffect(() => {
    fetch("/fashionProducts.json")
      .then((response) => response.json())
      .then((data) => {
        setFashionImgs(data);
        setCategorySelector(data.filter((item) => item.type === "male")); // Set initial categorySelector
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  const arrivalsMenFashion = fashionImgs.filter((item) => item.type == "male");
  const arrivalsWomenFashion = fashionImgs.filter(
    (item) => item.type == "female"
  );
  const arrivalsWomenAccessories = fashionImgs.filter(
    (item) => item.type == "christmas"
  );
  const arrivalsMenAccessories = fashionImgs.filter(
    (item) => item.type == "valentine"
  );

  const categoryOptions = [
    { name: "Gift Cards", details: arrivalsMenFashion },
    { name: "Gift Bags", details: arrivalsWomenFashion },
    { name: "Christmas", details: arrivalsWomenAccessories },
    { name: "Valentine Cards", details: arrivalsMenAccessories },
  ];

  const [active, setActive] = useState(0);

  const [categorySelector, setCategorySelector] = useState(arrivalsMenFashion);

  return (
    <>
      <div className="bg-white flex flex-col gap-10 pt-[50px] pb-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-[28px] font-serif">New Arrivals</h1>
          <div className="text-center opacity-70">
            Discover our exciting new arrivals—fresh, unique options that bring{" "}
            <br />
            style, joy, and inspiration to your gifting experience.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categoryOptions.map(({ name, details }, i) => (
            <div
              key={i}
              onClick={() => {
                setCategorySelector(details), setActive(i);
              }}
              className={`py-2 px-5 ${
                i == active ? "bg-black text-white" : "bg-[#FAFAFA] text-black"
              } rounded-[5px] shadow-md cursor-pointer`}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-7">
          <div className="p-7 rounded-[5px] grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-fit">
            {categorySelector.map(
              ({ image, name, price, statues, star, color }, i) => (
                <Link
                  to={`/shop/${name}`}
                  key={i}
                  className="product__shadow h-[350px] px-4 py-4 bg-white w-[300px] flex flex-col gap-3 rounded-[10px]"
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt=""
                    className="h-[250px] w-[280px] rounded-[7px]"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3>{name}</h3>
                      </div>
                      <img src={star} alt="" className="h-[17px]" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <p className="font-semibold">${price}</p>
                    <p
                      className={`text-[13px] ${color && `text-${color}-900`}`}
                    >
                      {statues}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
          <Link to="/shop">
            <Button text="View More" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
