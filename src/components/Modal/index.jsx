import { useKeyDown } from "../../hooks/useKeydown";
import { useOutclick } from "../../hooks/useOutclick";
import { StyledTitle } from "../../styles/typography";
import { IoClose } from "react-icons/io5";
import {
  StyledModal,
  StyledModalArea,
  StyledModalBox,
  StyledModalContainer,
  StyledModalTitle,
} from "./style";
import { useDispatch } from "react-redux";
import {
  addRecipeModalThunk,
  closeEditThunk,
  closeRecipeThunk,
  editRecipeModalThunk,
} from "../../store/modules/modal/thunks";

export function Modal({ children, title, type }) {
  const dispatch = useDispatch();

  let modalRef = useOutclick(() => {
    handleClick();
  });

  useKeyDown("Escape", () => {
    handleClick();
  });

  function handleClick() {
    if (type == "show") {
      dispatch(closeRecipeThunk());
    } else if (type == "add") {
      dispatch(addRecipeModalThunk(false));
    } else if (type == "edit") {
      dispatch(closeEditThunk());
    }
  }
  return (
    <StyledModal>
      <StyledModalContainer>
        <StyledModalArea ref={modalRef}>
          <div>
            <StyledModalTitle type={type}>
              <StyledTitle number={4}>{title}</StyledTitle>
              <button onClick={handleClick}>
                <IoClose size={20} />
              </button>
            </StyledModalTitle>
          </div>

          <StyledModalBox type={type}>{children}</StyledModalBox>
        </StyledModalArea>
      </StyledModalContainer>
    </StyledModal>
  );
}
