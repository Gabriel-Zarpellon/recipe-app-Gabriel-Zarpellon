import { GET_RECIPES, SEARCH_RECIPE } from "./actionTypes";

export function getRecipes(recipes) {
  return {
    type: GET_RECIPES,
    recipes: recipes,
  };
}

export function searchRecipe(recipeName) {
  return {
    type: SEARCH_RECIPE,
    name: recipeName,
  };
}
