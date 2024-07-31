export function SearchSection() {
  return (
    <section>
      <div>
        <h3>
          A blog made only for the best recipes that you can't find anywhere
          else
        </h3>
      </div>
      <input type="text" placeholder="Search for a recipe..." />
      <div>
        <ul>
          <li>
            <input type="radio" name="meal-type-radio" value="breakfast" />
            <label for="breakfast">Breakfast</label>
          </li>
          <li>
            <input type="radio" name="meal-type-radio" value="lunch" />
            <label for="lunch">Lunch</label>
          </li>
          <li>
            <input type="radio" name="meal-type-radio" value="supper" />
            <label for="supper">Supper</label>
          </li>
          <li>
            <input type="radio" name="meal-type-radio" value="snack" />
            <label for="snack">Snack</label>
          </li>
        </ul>
      </div>
    </section>
  );
}
