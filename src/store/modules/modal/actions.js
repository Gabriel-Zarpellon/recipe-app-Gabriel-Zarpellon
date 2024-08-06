import {
  ADD_RECIPE,
  CLOSE_EDIT,
  CLOSE_RECIPE,
  EDIT_RECIPE,
  OPEN_RECIPE,
} from "./actionTypes";

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

export function editRecipeModal(recipe) {
  return {
    type: EDIT_RECIPE,
    open: true,
    recipe: recipe,
  };
}

export function closeEdit() {
  return {
    type: CLOSE_EDIT,
  };
}
