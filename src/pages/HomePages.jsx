import React from "react";
import homepage from "../assets/images/layer.png";



const HomePages = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center lg:gap-80 pt-8 lg:pt-0">
        <span className=" max-w-md">
        <h1 className="text-4xl pb-2">Welcome To Our </h1>
          <h1 className="font-bold text-4xl pb-2">Lizidi Tikipidi World</h1>
          <p>
          Lizidi Tikipidi  is the buying and selling of goods and services, or the transmitting of funds or data, 
          over an electronic network, primarily the internet.
          </p>
        </span>
        <img
          className="py-8 "
          src={homepage}
          width={675.54}
          height={454.17}
          alt="browsing"
          priority={true}
        />
      </div>
  );
};

export default HomePages;
