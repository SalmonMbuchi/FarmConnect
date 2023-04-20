import React from "react";
import styles from "../../styles/styles";
// import CountDown from "./CountDown";
import { IoIosArrowForward } from "react-icons/io";

const EventCard = ({ active, data }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img
          src="https://www.shedsdirectireland.com/wp-content/uploads/2019/05/12.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle} ml-3 text-[#1d7c1d]`}>
          {" "}
          Heavy Duty Wheelbarrow
        </h2>
        <p className="ml-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] ml-3 text-[14px] text-[#5b741d] pr-3 line-through">
              8000ksh
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              7000ksh
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[15px] text-[#2da14c]">
            120 sold
          </span>
        </div>
        <div className={`flex ${styles.button} ml-3`}>
          <h1 className="text-[#fff] flex items-center">
            Buy Now! <IoIosArrowForward className="ml-1" />
          </h1>
        </div>
        {/* <CountDown /> */}
        <br />
      </div>
    </div>
  );
};

export default EventCard;
