import { ADD_RECIPE, CLOSE_RECIPE, OPEN_RECIPE } from "./actionTypes";

export function openRecipe(recipe) {
  return {
    type: OPEN_RECIPE,
    value: true,
    recipe: recipe,
  };
}

export function closeRecipe() {
  return {
    type: CLOSE_RECIPE,
    value: false,
    recipe: null,
  };
}

export function addRecipeModal(open) {
  return {
    type: ADD_RECIPE,
    open: open,
  };
}
