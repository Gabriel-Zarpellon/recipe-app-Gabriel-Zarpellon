import {
  ADD_RECIPE,
  CLOSE_EDIT,
  CLOSE_RECIPE,
  EDIT_RECIPE,
  OPEN_RECIPE,
} from "./actionTypes";

export function openRecipeReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_RECIPE:
      return {
        value: action.value,
        recipe: action.recipe,
      };

    case CLOSE_RECIPE:
      return {
        value: action.value,
        recipe: action.recipe,
      };

    default:
      return state;
  }
}

export function addRecipeModalReducer(state = false, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return action.open;

    default:
      return state;
  }
}

export function editRecipeModalReducer(
  state = { open: false, recipe: null },
  action
) {
  switch (action.type) {
    case EDIT_RECIPE:
      return { open: action.open, recipe: action.recipe };

    case CLOSE_EDIT:
      return {
        open: false,
        recipe: null,
      };

    default:
      return state;
  }
}
