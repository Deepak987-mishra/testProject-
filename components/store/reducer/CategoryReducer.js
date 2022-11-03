

import { types } from "../ActionTypes";

const INITIAL_STATE = {

  categoryReducer:null,
  brandData:null,
 
};

const CategoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    
    case types.CATEGORY_REDUCER: {
        return { ...state, categoryReducer: payload };
      }

      case types.BRAND_REDUCER: {
        return { ...state, brandData: payload };
      }
   
    default:
      return state;1
  }
};

export default CategoryReducer;


