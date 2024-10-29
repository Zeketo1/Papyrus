import React, { useContext, useEffect } from "react";
import Fashion from "../components/shop/Fashion";
import Sample from "../common/Sample";

const Shop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <div className="font-poppins">
                <Fashion />
                <Sample />
            </div>
        </>
    );
};

export default Shop;
