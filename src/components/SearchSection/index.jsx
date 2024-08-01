import { StyledTitle } from "../../styles/typography";
import { StyledButton, StyledSection, StyledTextInput } from "./style";

export function SearchSection({
  setAll,
  setBreakfast,
  setLunch,
  setSupper,
  setSnack,
  setList,
  all,
  breakfast,
  lunch,
  supper,
  snack,
}) {
  function handleClick(selected) {
    setList(selected);

    if (selected == "all") {
      setAll(true);
      setBreakfast(false);
      setLunch(false);
      setSupper(false);
      setSnack(false);
    } else if (selected == "breakfast") {
      setAll(false);
      setBreakfast(true);
      setLunch(false);
      setSupper(false);
      setSnack(false);
    } else if (selected == "lunch") {
      setAll(false);
      setBreakfast(false);
      setLunch(true);
      setSupper(false);
      setSnack(false);
    } else if (selected == "supper") {
      setAll(false);
      setBreakfast(false);
      setLunch(false);
      setSupper(true);
      setSnack(false);
    } else if (selected == "snack") {
      setAll(false);
      setBreakfast(false);
      setLunch(false);
      setSupper(false);
      setSnack(true);
    }
  }
  return (
    <StyledSection>
      <div>
        <StyledTitle number={3}>
          A blog made only for the best recipes that you can't find anywhere
          else
        </StyledTitle>
      </div>
      <StyledTextInput type="text" placeholder="Search for a recipe..." />
      <div>
        <ul>
          <li>
            <StyledButton onClick={() => handleClick("all")} checked={all}>
              ALL
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => handleClick("breakfast")}
              checked={breakfast}
            >
              BREAKFAST
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => handleClick("lunch")} checked={lunch}>
              LUNCH
            </StyledButton>
          </li>
          <li>
            <StyledButton
              onClick={() => handleClick("supper")}
              checked={supper}
            >
              SUPPER
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => handleClick("snack")} checked={snack}>
              SNACK
            </StyledButton>
          </li>
        </ul>
      </div>
    </StyledSection>
  );
}
