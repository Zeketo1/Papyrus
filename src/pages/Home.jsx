import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import Deals from "../components/home/Deals";
import Arrivals from "../components/home/Arrivals";
import Sample from "../common/Sample";
import Comments from "../common/Comments";
import { FaArrowUp } from "react-icons/fa6";

const Home = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        // console.log(position);
    };

    const position = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // console.log("clicked")
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#f5f5f5] font-poppins">
            {scrollPosition > 800 && (
                <div
                    className="fixed bottom-[50px] right-[50px] bg-black rounded-[50%] p-1 z-[100]"
                    onClick={position}
                >
                    <FaArrowUp className="text-[25px] text-white"/>
                </div>
            )}
            <Banner />
            <Deals />
            <Arrivals />
            <Sample />
            <Comments />
        </div>
    );
};

export default Home;
