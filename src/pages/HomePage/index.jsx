import { useState } from "react";
import { Nav } from "../../components/NavMenu";
import { RecipeList } from "../../components/RecipeList";
import { SearchSection } from "../../components/SearchSection";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import {
  StyledAddRecipeBox,
  StyledHeaderBox,
  StyledMainBox,
  StyledResultBox,
  StyledResultSection,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipeThunk } from "../../store/modules/recipe/thunks";
import { IoClose } from "react-icons/io5";
import { ShowRecipeModal } from "../../components/ShowRecipeModal";
import { AddRecipeModal } from "../../components/AddRecipeModal";
import { addRecipeModalThunk } from "../../store/modules/modal/thunks";
import { EditRecipeModal } from "../../components/EditRecipeModal";

export function HomePage() {
  const { openRecipe, addRecipeModal, editRecipeModal } = useSelector(
    (state) => state
  );
  
  const [mealType, setMealType] = useState("all");
  const [search, setSearch] = useState();

  const dispatch = useDispatch();

  function clearSearch() {
    setSearch("");
    dispatch(searchRecipeThunk(""));
  }

  return (
    <>
      <header>
        <StyledContainer>
          <StyledHeaderBox>
            <StyledTitle number={2} color="golden">
              RecipeApp
            </StyledTitle>
            <StyledTitle number={1}>Recipe Blog Application</StyledTitle>
          </StyledHeaderBox>
        </StyledContainer>
      </header>
      <main>
        <StyledContainer>
          <StyledMainBox>
            <Nav />
            <SearchSection setMealType={setMealType} setSearch={setSearch} />
            <StyledResultSection>
              {search ? (
                <StyledResultBox>
                  <StyledParagraph>
                    Results for <strong>{search}</strong>
                  </StyledParagraph>
                  <button onClick={clearSearch}>
                    <IoClose size={16} />
                  </button>
                </StyledResultBox>
              ) : null}
              <StyledAddRecipeBox>
                <button onClick={() => dispatch(addRecipeModalThunk(true))}>
                  Add new recipe
                </button>
              </StyledAddRecipeBox>
            </StyledResultSection>

            <section>
              <RecipeList mealType={mealType} />
            </section>
          </StyledMainBox>
        </StyledContainer>
      </main>
      {openRecipe.value ? <ShowRecipeModal /> : null}
      {addRecipeModal ? <AddRecipeModal /> : null}
      {editRecipeModal.open ? <EditRecipeModal /> : null}
    </>
  );
}
