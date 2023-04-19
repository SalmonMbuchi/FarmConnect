import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Fresh brocolli",
      description: "test",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/large/134681.jpg",
      price: 199,
    },
    {
      name: "Eggs",
      description: "test",
      price: 350,
    },
    {
      name: "Strawberries",
      description: "test",
      price: 645,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-4 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart Single Items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>

        <div className="px-5 mb-3">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#166b37] rounded-[5px]`}
            >
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Ksh 1080
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#1c8b2b] border border-[#3ac26773] rounded-full w-[16px] h-[16px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={14} color="#fff" />
          </div>
          <span className="pl-[5px] size={3} "> {value} </span>
          <div
            className="bg-[#4f51534f] rounded-full w-[16px] h-[16px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={14} color="black" />
          </div>
        </div>
        <img
          src="https://cdn0.woolworths.media/content/wowproductimages/large/134681.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-4"
        />
        <div className="pl-[15px]">
          <h1>{data.name}</h1>
          {/* <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4> */}
          <h4 className="font-[600] text-[15px] pt-[3px] text-[#1c8b2b] font-Roboto">
            Ksh {totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer ml-10" />
      </div>
    </div>
  );
};

export default Cart;