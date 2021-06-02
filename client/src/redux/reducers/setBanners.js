import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAIL,
} from "../types";
const defaultState = {
  loading: false,
  banners: {},
  error: false,
};
export function setBanners(state = defaultState, action) {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      state = { ...state, loading: true };
      return state;
    case GET_BANNERS_SUCCESS:
      state = { ...state, loading: false, banners: action.payload };
      return state;
    case GET_BANNERS_FAIL:
      state = { ...state, loading: false, error: true };
      return state;
    default:
      return state;
  }
}
