import { ActionTypes } from "../constants/action-types";

const initialState = {
  productsByCategory: [],
};

export const categoryProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT_BY_CATEGORY:
      return {...state, productsByCategory: payload };
    default:
      return state;
  }
};
