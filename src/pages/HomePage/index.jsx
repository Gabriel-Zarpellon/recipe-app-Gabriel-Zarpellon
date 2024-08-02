import { useState } from "react";
import { Nav } from "../../components/NavMenu";
import { RecipeList } from "../../components/RecipeList";
import { SearchSection } from "../../components/SearchSection";
import { StyledContainer } from "../../styles/grid";
import { StyledTitle } from "../../styles/typography";
import { StyledHeaderBox, StyledMainBox } from "./style";

export function HomePage() {
  const [mealType, setMealType] = useState("all");

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
            <SearchSection setMealType={setMealType} />
            <section>
              <RecipeList mealType={mealType}/>
            </section>
          </StyledMainBox>
        </StyledContainer>
      </main>
    </>
  );
}
