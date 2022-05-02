// use axios for api
// import axios from "axios";
import { DATA_LOADING, DATA_SUCCESS, DATA_ERROR } from "./actionTypes.js";

export const getDataloading = () => ({
  type: DATA_LOADING,
});

export const getDataerror = () => ({
  type: DATA_ERROR,
});

export const getDataSuccess = (payload) => ({
  type: DATA_SUCCESS,
  payload,
});

export const getProductsData =async(dispatch) => {
  let res =await fetch(`https://movie-fake-server.herokuapp.com/products`)
    let data = await res.json()

    dispatch(getDataSuccess(data))
};

export const sortProducts = () => {};

export const filterProducts = () => {};

// export { getProductsData, sortProducts, filterProducts };
