import { takeLatest, put, call } from "redux-saga/effects";
import { types } from "../ActionTypes";
import { apiCall } from "../../config/ApiConfig";







function* getProfileData() {
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: true,
  });
  try {
    let response = yield call(apiCall, `https://dev.gazingtechnosoft.com/swati/multivendor/api/getprofile/1`, null, "GET");
    
    console.log("resulSpecialRequirement", response);
    let result = yield response.json()
    console.log('result',result)
    if (result) {
      yield put({
        type: types.PROFILE_REDUCER,
        payload: result.data,
      });
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: false,
  });
}

// const {data}=await axios.get('http://127.0.0.1:8000/api/category/')




function* getCategoryData() {
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: true,
  });
  try {
    let response = yield call(apiCall,'http://admin.cashknock.com/api/category/' , null, "GET");
    let result = yield response.json();
    //console.log("categoryresponse", response);
    //console.log("categoryData", result);

    if (result) {
      yield put({
        type: types.CATEGORY_REDUCER,
        payload: result.data,
      });
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: false,
  });
}
// const {data}=await axios.get(`http://127.0.0.1:8000/api/brand?${key}`

function* getBrandData() {
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: true,
  });
  try {
    // const {data}=await axios.get(`http://127.0.0.1:8000/api/brand?${key}`
    let response = yield call(apiCall,'http://admin.cashknock.com/api/brand/' , null, "GET");
    let result = yield response.json();
    //console.log("brandResponse", response);
    //console.log("brandData", result);

    if (result) {
      yield put({
        type: types.BRAND_REDUCER,
        payload: result,
      });
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: types.TOGGLE_APP_LOADING,
    payload: false,
  });
}


export default function* watchDummySaga() {
 
  yield takeLatest(types.GET_PROFILE_DATA,getProfileData);
  yield takeLatest(types.GET_CATEGORY_DATA,getCategoryData);
  yield takeLatest(types.GET_BRAND_DATA,getBrandData);
}

