import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAIL,
} from "../types";
const initialState = {
  loading: false,
  banners: {},
  error: false,
};
export function setBanners(state = initialState, action) {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      return { ...state, loading: true };
    case GET_BANNERS_SUCCESS:
      return { ...state, loading: false, banners: action.payload };
    case GET_BANNERS_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
