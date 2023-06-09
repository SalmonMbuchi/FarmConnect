import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
