import React, { useEffect, useState } from "react";
import { bannerImages } from "../..";
import { motion } from "framer-motion";
import { TextGenerateEffectDemo } from "./TextGenerate";

const Banner = () => {
  const bannerDisplays = [
    {
      text: "Show Mom how much she means to you with a heartfelt gift card. Make her day special, filled with love and appreciation.",
      image: bannerImages[0],
      title: "Mothers Day",
    },
    {
      text: "Celebrate love with the perfect gift card for that special someone. Share the joy, spread the love.",
      image: bannerImages[1],
      title: "Valentine Day",
    },
    {
      text: "Give the gift of joy this Christmas with a festive card. Spread holiday cheer with a gift they'll love.",
      image: bannerImages[2],
      title: "Christmas Day",
    },
  ];

  const [banner, setBanner] = useState(0);

  const bgStyle = {
    backgroundImage: `url(${bannerImages[banner]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setBanner((prevBanner) =>
        prevBanner === bannerDisplays.length - 1 ? 0 : prevBanner + 1
      );
    }, 4000);

    // Clear the timeout when the component unmounts or when banner changes
    return () => clearTimeout(interval);
  }, [banner]);

  return (
    <div className="relative w-full bg-white mb-5 h-[500px]">
      <div className="h-full w-full bannerglass absolute opacity-80 z-10" />
      {bannerDisplays.map(
        ({ text }, i) =>
          i === banner && (
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: {duration: 0.5} }}
              className="flex items-center text-white justify-center"
              style={bgStyle}
              key={i}
            >
              <div className="static z-50 text-[40px] font-serif font-semibold text-center w-[50%]">
                <TextGenerateEffectDemo words={text} />
              </div>
            </motion.div>
          )
      )}
    </div>
  );
};

export default Banner;
