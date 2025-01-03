import {
  ADD_RECIPE,
  CLEAR_SEARCH,
  DELETE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPES,
  SEARCH_RECIPE,
} from "./actionTypes";

export function getRecipes() {
  return {
    type: GET_RECIPES,
  };
}

export function addRecipe(data) {
  return {
    type: ADD_RECIPE,
    recipe: data,
  };
}

export function editRecipe(editedRecipe) {
  return {
    type: EDIT_RECIPE,
    recipe: editedRecipe,
  };
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id: id,
  };
}

export function searchRecipe(recipeName) {
  return {
    type: SEARCH_RECIPE,
    name: recipeName,
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}
