import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sampleIcons, sampleImg } from "..";

const Sample = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div className="bg-white flex flex-col gap-16 pb-5">
        <div className="flex flex-col gap-5 sm:gap-0 sm:grid shape__grid sm:h-[430px] md:h-[450px] lg:h-[500px] bg-red-50">
          <motion.div
            ref={ref}
            initial={{ x: -400 }}
            animate={isInView ? { x: 0 } : { x: -350 }}
            transition={{ duration: 0.7 }}
            className="bg-pink-100 h-full w-full left__shape"
          >
            <img
              src={sampleImg}
              alt=""
              className="sm:h-[430px] md:h-[450px] lg:h-[500px] -translate-x-28"
            />
          </motion.div>
          <div className="h-[420px] sm:h-full w-full right__shape pl-5 flex items-center">
            <div className="flex flex-col gap-3 lg:gap-5">
              <p className="opacity-80 text-[14px]">Chirstmas Collection</p>
              <h1 className="md:my-2 text-[23px] md:text-[30px] font-serif">
                Brown Gift Box
              </h1>
              <p className="font-semibold underline">DESCRIPTION</p>
              <p className="opacity-80 text-[15px] lg:text-[17px]">
                Unwrap the magic of the season with our beautifully curated <br />
                Christmas Gift Box! Filled with festive treats and thoughtful <br />
                surprises, it's the perfect way to share holiday cheer with <br />
                loved ones.
              </p>
              <div className="flex items-center gap-2">
                <span>Size:</span>
                <span className="bg-black text-white py-[2px] px-4 rounded-xl">
                  M
                </span>
              </div>
              <p className="font-semibold">
                $14.<span className="text-[13px]">00</span>
              </p>
              <button className="bg-black py-2 px-10 rounded-md w-fit text-white text-[13px]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex shadow-xl justify-around flex-wrap gap-10 py-5 md:py-10">
          {sampleIcons.map(({ icon, title, text }, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4">
              <img src={icon} alt="" className="h-[35px] md:h-[40px]" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[14px] font-san font-semibold">{title}</h3>
                <p className="text-[13px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sample;
