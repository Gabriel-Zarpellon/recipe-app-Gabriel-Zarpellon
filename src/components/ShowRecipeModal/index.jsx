import { useDispatch, useSelector } from "react-redux";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { Modal } from "../Modal";
import {
  StyledBottomRecipe,
  StyledBox,
  StyledMidRecipe,
  StyledUpperRecipe,
} from "./style";
import {
  closeRecipeThunk,
  editRecipeModalThunk,
} from "../../store/modules/modal/thunks";
import { deleteRecipeThunk } from "../../store/modules/recipe/thunks";

export function ShowRecipeModal() {
  const { openRecipe } = useSelector((state) => state);

  const currentRecipe = openRecipe.recipe;

  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteRecipeThunk(currentRecipe.id));
    dispatch(closeRecipeThunk());
  }
  return (
    <Modal type="show" title="Recipe">
      <StyledUpperRecipe>
        <StyledTitle number={1}>{currentRecipe.name}</StyledTitle>
        <StyledBox>
          <div>
            <StyledTitle number={2}>Ingredients</StyledTitle>
            <StyledParagraph>{currentRecipe.ingredients}</StyledParagraph>
          </div>
          <div>
            <img src={currentRecipe.img} alt={currentRecipe.name} />
          </div>
        </StyledBox>
      </StyledUpperRecipe>
      <StyledMidRecipe>
        <StyledTitle>Method</StyledTitle>
        <StyledParagraph>{currentRecipe.method}</StyledParagraph>
      </StyledMidRecipe>
      <StyledBottomRecipe>
        <button onClick={() => dispatch(editRecipeModalThunk(currentRecipe))}>
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </StyledBottomRecipe>
    </Modal>
  );
}
