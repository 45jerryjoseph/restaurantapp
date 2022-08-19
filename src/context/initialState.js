import { fetchuser } from "../utils/fetchLocalStorageData";

const  userInfo =fetchuser()

export const initialState = {
    user: userInfo,
};