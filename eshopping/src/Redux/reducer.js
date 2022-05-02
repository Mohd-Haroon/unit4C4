import {DATA_LOADING,DATA_SUCCESS,DATA_ERROR} from "./actionTypes.js"


const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case DATA_LOADING:{
      return{ 
        ...state,
        isLoading:true,
        isError : false,
        filterData: [],
        products: [],
      }
    }
    case DATA_SUCCESS:{
      console.log("payload",payload)
      return{ 
        ...state,
        isLoading:false,
        isError : false,
        filterData: [],
        products: [...payload],
      }
    }
    case DATA_ERROR:{
      return{ 
        ...state,
        isLoading:false,
        isError : true,
        filterData: [],
        products: [],
      }
    }
    default:
      return state
  }
};
export { reducer };
