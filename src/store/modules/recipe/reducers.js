import { GET_RECIPES, SEARCH_RECIPE } from "./actionTypes";

export function recipeReducer(state = [], action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;

    case SEARCH_RECIPE:
      return state.filter((recipe) =>
        recipe.name.toLowerCase().includes(action.name.toLowerCase())
      );

    default:
      return state;
  }
}
