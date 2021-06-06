import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { setBanners } from "./setBanners";
import { setCategories } from "./setCategories";
import { setProducts } from "./setProducts";
import { setCart } from "./setCart";
const rootReducer = combineReducers({
  bannersData: setBanners,
  categoriesData: setCategories,
  productsData: setProducts,
  cartData: setCart,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
