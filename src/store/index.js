import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer, searchReducer } from "./modules/recipe/reducers";
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
  search: searchReducer,
};

export const store = configureStore({
  reducer,
});
