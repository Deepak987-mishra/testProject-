

import { types } from "../ActionTypes";

const INITIAL_STATE = {
  loader: false,
  profileData:null,
 
};

const GlobalReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_APP_LOADING: {
      return { ...state, loader: payload };
    }
    case types.PROFILE_REDUCER: {
        return { ...state, profileData: payload };
      }
   
    default:
      return state;
  }
};

export default GlobalReducer;


