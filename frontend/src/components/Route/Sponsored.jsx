import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://www.kari.org/wp-content/uploads/2019/01/logo-final.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://ask.co.ke/wp-content/uploads/2021/01/ask19.jpg"
            style={{ width: "100px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://ask.co.ke/wp-content/uploads/2021/01/logo.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.kalro.org/wp-content/uploads/2021/11/logo-site.png"
            style={{ width: "250px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://ask.co.ke/wp-content/uploads/2021/01/ask25.jpg"
            style={{ width: "100px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
