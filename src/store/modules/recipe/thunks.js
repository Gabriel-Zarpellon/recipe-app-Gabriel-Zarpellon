import { recipeList } from "../../../data";
import { getRecipes, searchRecipe } from "./actions";

export function getRecipesThunk() {
  const recipes = recipeList;
  return (dispatch) => {
    dispatch(getRecipes(recipes));
  };
}

export function searchRecipeThunk(recipeName) {
  return (dispatch) => {
    if (recipeName == "") {
      dispatch(getRecipesThunk());
    } else {
      dispatch(searchRecipe(recipeName));
    }
  };
}
