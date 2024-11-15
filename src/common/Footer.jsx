import React from "react";

const Footer = () => {
  const options = [
    "Support",
    "Invoicing",
    "Contract",
    "Careers",
    "Blog",
    "FAQs",
  ];

  return (
    <>
      <div className="static bottom-0 left-0 bg-white sm:pt-4 py-3 flex flex-col gap-3 footer__top__border ">
        <h1 className="text-[30px] font-serif text-center sm:hidden">
          Papyrus
        </h1>
        <div className="flex items-center justify-between lg:justify-around px-3">
          <h1 className="text-[30px] font-serif hidden sm:block">Papyrus</h1>
          <div className="flex gap-5">
            {options.map((option, i) => (
              <i key={i} className="text-[14px] cursor-pointer">
                {option}
              </i>
            ))}
          </div>
        </div>
        <p className="text-center text-[13px] font-semibold">
          Copyright &copy;Papyrus 2024 .
        </p>
      </div>
    </>
  );
};

export default Footer;
