import { combineReducers } from "redux";
import { categoryProductReducer } from "./categoryProductReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    productsByCategory: categoryProductReducer,
})

export default reducers