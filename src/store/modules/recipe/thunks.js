import {
  addRecipe,
  deleteRecipe,
  editRecipe,
  getRecipes,
  searchRecipe,
} from "./actions";

export function getRecipesThunk() {
  return (dispatch) => {
    dispatch(getRecipes());
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

export function addRecipeThunk(formData) {
  return (dispatch) => {
    dispatch(addRecipe({ ...formData, id: crypto.randomUUID() }));
  };
}

export function editRecipeThunk(formData) {
  return (dispatch) => {
    dispatch(editRecipe(formData));
  };
}

export function deleteRecipeThunk(id) {
  return (dispatch) => {
    dispatch(deleteRecipe(id));
  };
}
