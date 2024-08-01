import { useState } from "react";
import { Nav } from "../../components/NavMenu";
import { RecipeList } from "../../components/RecipeList";
import { SearchSection } from "../../components/SearchSection";
import { StyledContainer } from "../../styles/grid";
import { StyledTitle } from "../../styles/typography";
import { StyledHeaderBox, StyledMainBox } from "./style";

export function HomePage() {
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [supper, setSupper] = useState(false);
  const [snack, setSnack] = useState(false);
  const [list, setList] = useState("");

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
            <SearchSection
              setAll={setAll}
              setBreakfast={setBreakfast}
              setLunch={setLunch}
              setSupper={setSupper}
              setSnack={setSnack}
              setList={setList}
              all={all}
              breakfast={breakfast}
              lunch={lunch}
              supper={supper}
              snack={snack}
            />
            <section>
              <RecipeList />
            </section>
          </StyledMainBox>
        </StyledContainer>
      </main>
    </>
  );
}
