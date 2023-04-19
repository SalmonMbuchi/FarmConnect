import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Fresh brocolli",
      description: "test",
      price: 999,
    },
    {
      name: "Fresh brocolli",
      description: "test",
      price: 245,
    },
    {
      name: "Fresh brocolli",
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
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart Single Items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
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
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://cdn0.woolworths.media/content/wowproductimages/large/134681.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-4"
        />

        <div className="pl-[15px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[15px] pt-[3px] text-[#166b37] font-Roboto pl-3">
            Ksh {totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer ml-8"
            tile="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
