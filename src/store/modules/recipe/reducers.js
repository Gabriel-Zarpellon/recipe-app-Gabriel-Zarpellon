import { recipeList } from "../../../data";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPES,
  SEARCH_RECIPE,
} from "./actionTypes";

const localRecipeList = localStorage.getItem("@RECIPELIST");

const initialState = localRecipeList ? JSON.parse(localRecipeList) : recipeList;

export function recipeReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case GET_RECIPES:
      localStorage.setItem("@RECIPELIST", JSON.stringify(state));
      return state;

    case SEARCH_RECIPE:
      return state.filter((recipe) =>
        recipe.name.toLowerCase().includes(action.name.toLowerCase())
      );

    case ADD_RECIPE:
      return [...state, action.recipe];

    case EDIT_RECIPE:
      return state.map((recipe) =>
        recipe.id == action.recipe.id ? action.recipe : recipe
      );

    case DELETE_RECIPE:
      return state.filter((recipe) => recipe.id != action.id);

    default:
      return state;
  }
}
