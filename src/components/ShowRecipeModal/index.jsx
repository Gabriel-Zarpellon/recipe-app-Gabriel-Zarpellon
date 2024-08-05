import { useDispatch, useSelector } from "react-redux";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { Modal } from "../Modal";
import {
  StyledBottomRecipe,
  StyledMidRecipe,
  StyledUpperRecipe,
} from "./style";

export function ShowRecipeModal() {
  const { openRecipe } = useSelector((state) => state);

  const currentRecipe = openRecipe.recipe;

  return (
    <Modal type="show" title="Recipe">
      <StyledUpperRecipe>
        <div>
          <StyledTitle number={1}>{currentRecipe.name}</StyledTitle>
          <div>
            <StyledTitle number={2}>Ingredients</StyledTitle>
            <StyledParagraph>{currentRecipe.ingredients}</StyledParagraph>
          </div>
        </div>
        <img src={currentRecipe.img} alt={currentRecipe.name} />
      </StyledUpperRecipe>
      <StyledMidRecipe>
        <StyledTitle>Method</StyledTitle>
        <StyledParagraph>{currentRecipe.method}</StyledParagraph>
      </StyledMidRecipe>
      <StyledBottomRecipe>
        <button>Edit</button>
        <button>Delete</button>
      </StyledBottomRecipe>
    </Modal>
  );
}
