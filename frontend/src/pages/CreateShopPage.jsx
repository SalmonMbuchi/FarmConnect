import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateShop from "../components/Shop/CreateShop";

const CreateShopPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  });
  return (
    <div>
      <CreateShop />
    </div>
  );
};

export default CreateShopPage;
