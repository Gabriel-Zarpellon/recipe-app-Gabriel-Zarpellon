import { StyledTitle } from "../../../styles/typography";

export function RecipeCard() {
  return (
    <li>
      <div>
        <span>Type</span>
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chorizo_gnocchi_48255_16x9.jpg"
          alt="Gnocchi"
        />
        <div>
          <p>Begginer</p>
          <p>x4</p>
        </div>
      </div>
      <StyledTitle number={4}>Nome do prato</StyledTitle>
    </li>
  );
}
