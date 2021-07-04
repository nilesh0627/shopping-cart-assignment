import { CURRENT_CATEGORY } from "../types";
export function currentCategoryAction(category) {
  return {
    type: CURRENT_CATEGORY,
    payload: category,
  };
}
