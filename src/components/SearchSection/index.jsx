import { useDispatch } from "react-redux";
import { StyledTitle } from "../../styles/typography";
import { StyledRadioList, StyledSection, StyledTextInput } from "./style";
import { searchRecipeThunk } from "../../store/modules/recipe/thunks";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export function SearchSection({ setMealType }) {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function inputChange(selected) {
    setMealType(selected);
  }

  function submit(e) {
    e.preventDefault();
    dispatch(searchRecipeThunk(value));
    setValue("");
  }

  return (
    <StyledSection>
      <div>
        <StyledTitle number={3}>
          A blog made only for the best recipes that you can't find anywhere
          else
        </StyledTitle>
      </div>
      <form onSubmit={submit}>
        <StyledTextInput
          type="text"
          placeholder="Search for a recipe..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <CiSearch size={21} />
        </button>
      </form>

      <div>
        <StyledRadioList>
          <li>
            <label>
              <input
                type="radio"
                name="meal"
                value="all"
                defaultChecked
                onChange={() => inputChange("all")}
              />
              <span>ALL</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="meal"
                value="breakfast"
                onChange={() => inputChange("breakfast")}
              />
              <span>BREAKFAST</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="meal"
                value="lunch"
                onChange={() => inputChange("lunch")}
              />
              <span>LUNCH</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="meal"
                value="supper"
                onChange={() => inputChange("supper")}
              />
              <span>SUPPER</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="meal"
                value="snack"
                onChange={() => inputChange("snack")}
              />
              <span>SNACK</span>
            </label>
          </li>
        </StyledRadioList>
      </div>
    </StyledSection>
  );
}
