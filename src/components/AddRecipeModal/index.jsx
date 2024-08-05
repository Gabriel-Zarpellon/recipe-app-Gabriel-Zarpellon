
import { Modal } from "../Modal";

export function AddRecipeModal() {
  return (
    <Modal type="add" title="Add your new recipe">
      <form>
        <div>
          <div>
            <label>
              <input type="text" placeholder="Insert recipe name..." />
            </label>
            <label>
              <input type="text" placeholder="Insert recipe image URL..." />
            </label>
          </div>
          <div>
            <label>
              <select name="" id="" defaultValue="begginert">
                <option value="begginer">Begginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </label>
            <label>
              <select name="" id="" defaultValue="breakfast">
                <option value="breakfast" >Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="snack">Snack</option>
              </select>
            </label>
          </div>
          <div>
            <label>
            <input type="number" placeholder="Insert the number of servings..." min={1}/> 
            </label>
          </div>
          <div>
            <label htmlFor="">
                <textarea name="" id="" placeholder="Insert ingredientes..."></textarea>
            </label>
          </div>
          <div>
            <label>
                <textarea name="" id="" placeholder="Insert method..."></textarea>
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
}
