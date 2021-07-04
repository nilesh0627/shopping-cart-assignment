import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { setBanners } from "./setBanners";
import { setCategories } from "./setCategories";
import { setProducts } from "./setProducts";
import { setCart } from "./setCart";
import { setOpenCart } from "./setOpenCart";
import { setCurrentCategory } from "./setCurrentCategory";
const rootReducer = combineReducers({
  bannersData: setBanners,
  categoriesData: setCategories,
  productsData: setProducts,
  cartData: setCart,
  isCartOpen: setOpenCart,
  currentCategory: setCurrentCategory,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
