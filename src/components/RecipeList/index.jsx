import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";
import { StyledRecipeList } from "./styles";
import { useEffect, useState } from "react";
import { getRecipesThunk } from "../../store/modules/recipe/thunks";

export function RecipeList({ mealType }) {
  const { recipes, search } = useSelector((state) => state);

  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    function getList() {
      dispatch(getRecipesThunk());
      if (search.length > 0) {
        setRecipeList(search);
      } else {
        setRecipeList(recipes);
      }
    }
    getList();
  }, [search, recipes]);

  const dispatch = useDispatch();

  const newRecipes = recipeList.filter((recipe) => recipe.meal == mealType);

  return (
    <StyledRecipeList>
      {mealType == "all"
        ? recipeList.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        : newRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
    </StyledRecipeList>
  );
}
