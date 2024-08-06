import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";
import { StyledRecipeList } from "./styles";
import { useEffect } from "react";
import { getRecipesThunk } from "../../store/modules/recipe/thunks";

export function RecipeList({ mealType }) {
  const { recipes } = useSelector((state) => state);
  const dispatch = useDispatch();
  const newRecipes = recipes.filter((recipe) => recipe.meal == mealType);

  useEffect(() => {
    function getRecipes() {
      dispatch(getRecipesThunk());
      
    }
    getRecipes();
  }, [recipes]);
  
  return (
    <StyledRecipeList>
      {mealType == "all"
        ? recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        : newRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
    </StyledRecipeList>
  );
}
