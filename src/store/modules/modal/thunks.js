import {
  addRecipeModal,
  closeEdit,
  closeRecipe,
  editRecipeModal,
  openRecipe,
} from "./actions";

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

export function editRecipeModalThunk(recipe) {
  return (dispatch) => {
    dispatch(editRecipeModal(recipe));
  };
}

export function closeEditThunk() {
  return (dispatch) => {
    dispatch(closeEdit());
  };
}
