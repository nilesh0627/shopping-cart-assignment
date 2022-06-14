import { Axios } from "../config";
import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAIL,
} from "../types";
export function getBanners() {
  return async (dispatch) => {
    dispatch(getBannersRequest());
    try {
      const bannerData = await Axios.get(`/ApnaBaazarJSONServer/banners`);
      dispatch(getBannersSuccess(bannerData));
    } catch (e) {
      dispatch(getBannersFail());
    }
  };
}

function getBannersRequest() {
  return {
    type: GET_BANNERS_REQUEST,
  };
}

function getBannersSuccess(bannerData) {
  return {
    type: GET_BANNERS_SUCCESS,
    payload: bannerData,
  };
}

function getBannersFail() {
  return {
    type: GET_BANNERS_FAIL,
  };
}
