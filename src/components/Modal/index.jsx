import { useKeyDown } from "../../hooks/useKeydown";
import { useOutclick } from "../../hooks/useOutclick";
import { StyledTitle } from "../../styles/typography";
import { IoClose } from "react-icons/io5";
import { StyledModal, StyledModalBox, StyledModalTitle } from "./style";
import { StyledContainer } from "../../styles/grid";
import { useDispatch } from "react-redux";
import {
  addRecipeModalThunk,
  closeRecipeThunk,
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
    }
  }
  return (
    <StyledModal>
      <StyledContainer>
        <div ref={modalRef}>
          <div>
            <StyledModalTitle>
              <StyledTitle number={4}>{title}</StyledTitle>
              <button onClick={handleClick}>
                <IoClose size={20} />
              </button>
            </StyledModalTitle>
          </div>

          <StyledModalBox>{children}</StyledModalBox>
        </div>
      </StyledContainer>
    </StyledModal>
  );
}
