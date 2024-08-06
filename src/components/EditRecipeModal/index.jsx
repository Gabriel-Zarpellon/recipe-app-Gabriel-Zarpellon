import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { editRecipeThunk } from "../../store/modules/recipe/thunks";
import {
  closeEditThunk,
  editRecipeModalThunk,
} from "../../store/modules/modal/thunks";
import {
  StyledBottomBox,
  StyledForm,
  StyledMidBox,
  StyledServingsBox,
  StyledUpperBox,
} from "./style";
import {
  StyledLabel,
  StyledNumberInput,
  StyledSelectInput,
  StyledTextArea,
  StyledTextInput,
} from "../../styles/form";

export function EditRecipeModal() {
  const { editRecipeModal } = useSelector((state) => state);

  const currentRecipe = editRecipeModal.recipe;

  const { register, handleSubmit } = useForm({
    values: {
      name: currentRecipe.name,
      img: currentRecipe.img,
      level: currentRecipe.level,
      meal: currentRecipe.meal,
      servings: currentRecipe.servings,
      ingredients: currentRecipe.ingredients,
      method: currentRecipe.method,
    },
  });

  const dispatch = useDispatch();

  function submit(formData) {
    dispatch(editRecipeThunk({...formData, id: currentRecipe.id}));
    dispatch(closeEditThunk());
  }
  
  return (
    <Modal type="edit" title="Edit recipe">
      <StyledForm onSubmit={handleSubmit(submit)}>
        <div>
          <StyledUpperBox>
            <div>
              <StyledLabel>Name</StyledLabel>
              <StyledTextInput
                type="text"
                placeholder="Recipe name..."
                {...register("name")}
              />
            </div>
            <div>
              <StyledLabel>Image URL</StyledLabel>
              <StyledTextInput
                type="text"
                placeholder="Recipe image URL..."
                {...register("img")}
              />
            </div>
          </StyledUpperBox>
          <StyledMidBox>
            <div>
              <StyledLabel>Level</StyledLabel>
              <StyledSelectInput defaultValue="begginer" {...register("level")}>
                <option value="begginer">Begginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </StyledSelectInput>
            </div>

            <div>
              <StyledLabel>Meal type </StyledLabel>
              <StyledSelectInput defaultValue="breakfast" {...register("meal")}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="snack">Snack</option>
              </StyledSelectInput>
            </div>
          </StyledMidBox>
          <StyledServingsBox>
            <StyledLabel>Servings</StyledLabel>
            <StyledNumberInput
              type="number"
              placeholder="Number of servings..."
              min={1}
              {...register("servings")}
            />
          </StyledServingsBox>
          <StyledBottomBox>
            <div>
              <StyledLabel>Ingredients </StyledLabel>
              <StyledTextArea
                placeholder="Insert ingredientes..."
                {...register("ingredients")}
              />
            </div>
            <div>
              <StyledLabel>Method</StyledLabel>
              <StyledTextArea
                placeholder="Insert method..."
                {...register("method")}
              />
            </div>
          </StyledBottomBox>
        </div>
        <button type="submit">Save recipe</button>
      </StyledForm>
    </Modal>
  );
}
