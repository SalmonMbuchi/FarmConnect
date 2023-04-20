import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative h-screen w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg)",
        backgroundSize: "cover",
        // width: "100%",
        // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        // "/home/salmon/git/FarmConnect/frontend/src/assets/pexels-jill-wellington-533360.jpg",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[45px] leading-[1.2] 800px:text-[110px] text-[#ffffff] font-[600] capitalize`}
        >
          FarmConnect
        </h1>
        <p className="pt-5 text-[20px] font-[Poppins] font-[700] text-[#ffffff]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
