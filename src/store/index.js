import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./modules/recipe/reducers";
import {
  addRecipeModalReducer,
  editRecipeModalReducer,
  openRecipeReducer,
} from "./modules/modal/reducers";

const reducer = {
  recipes: recipeReducer,
  openRecipe: openRecipeReducer,
  addRecipeModal: addRecipeModalReducer,
  editRecipeModal: editRecipeModalReducer,
};

export const store = configureStore({
  reducer,
});
