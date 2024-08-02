import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./modules/recipe/reducers";

const reducer = {
  recipes: recipeReducer,
};

export const store = configureStore({
  reducer,
});
