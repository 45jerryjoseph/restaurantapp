import { fetchcart, fetchuser } from "../utils/fetchLocalStorageData";

const  userInfo =fetchuser();
const cartInfo =fetchcart();

export const initialState = {
    user: userInfo,
    foodItems:null,
    cartShow :false,
    cartItems :cartInfo
};