import { CURRENT_CATEGORY } from "../types";
const category = null;
export function setCurrentCategory(state = category, action) {
  switch (action.type) {
    case CURRENT_CATEGORY:
      if (!action.payload) return null;
      return action.payload;
    default:
      return state;
  }
}
