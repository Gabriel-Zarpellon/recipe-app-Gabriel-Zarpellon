import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./modules/recipe/reducers";
import { addRecipeModalReducer, openRecipeReducer } from "./modules/modal/reducers";

const reducer = {
  recipes: recipeReducer,
  openRecipe: openRecipeReducer,
  addRecipeModal: addRecipeModalReducer,
};

export const store = configureStore({
  reducer,
});
