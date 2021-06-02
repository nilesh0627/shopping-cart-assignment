import axios from "axios";
import { BASE_URL } from "../config";
import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAIL,
} from "../types";
export function getBanners() {
  return async (dispatch) => {
    dispatch(getBannersRequest());
    try {
      const bannerData = await axios.get(`${BASE_URL}/banners`);
      dispatch(getBannersSuccess(bannerData));
    } catch (e) {
      dispatch(getBannersFail());
    }
  };
}

export function getBannersRequest() {
  return {
    type: GET_BANNERS_REQUEST,
  };
}

export function getBannersSuccess(bannerData) {
  return {
    type: GET_BANNERS_SUCCESS,
    payload: bannerData,
  };
}

export function getBannersFail() {
  return {
    type: GET_BANNERS_FAIL,
  };
}
