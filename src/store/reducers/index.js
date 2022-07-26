import { combineReducers } from "redux";
import { categoryProductReducer } from "./categoryProductReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    productsByCategory: categoryProductReducer,
    allUsers: userReducer
})

export default reducers