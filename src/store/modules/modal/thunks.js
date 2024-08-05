import {  addRecipeModal, closeRecipe, openRecipe } from "./actions";

export function openRecipeThunk(recipe) {
  return (dispatch) => {
    dispatch(openRecipe(recipe));
  };
}

export function closeRecipeThunk() {
  return (dispatch) => {
    dispatch(closeRecipe());
  };
}

export function addRecipeModalThunk(open) {
  return (dispatch) => {
    dispatch(addRecipeModal(open));
  };
}
