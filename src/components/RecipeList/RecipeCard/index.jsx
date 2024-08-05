import { useDispatch } from "react-redux";
import { StyledTitle } from "../../../styles/typography";
import { StyledRecipeCard } from "./styles";
import { openRecipeThunk } from "../../../store/modules/modal/thunks";

export function RecipeCard({ recipe }) {
  const dispatch = useDispatch();

  return (
    <StyledRecipeCard meal={recipe.meal} level={recipe.level}>
      <div>
        <span>{recipe.meal.toUpperCase()}</span>
        <img src={recipe.img} alt={recipe.name} />
        <div>
          <p>{recipe.level.toUpperCase()}</p>
          <p> x{recipe.servings}</p>
        </div>
      </div>
      <div>
        <StyledTitle number={4}>{recipe.name}</StyledTitle>
        <button onClick={() => dispatch(openRecipeThunk(recipe))}>
          View Recipe
        </button>
      </div>
    </StyledRecipeCard>
  );
}
