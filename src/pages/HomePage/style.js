import styled from "styled-components";

export const StyledHeaderBox = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledMainBox = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: var(--background-color);
  padding-inline: clamp(1rem, 0.286rem + 1.905vw, 3rem);
`;

export const StyledResultSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  gap: 1rem;

  @media (min-width: 690px) {
    padding-inline: 3.25rem;
  }
`;

export const StyledAddRecipeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    padding-block: 7px;
    padding-inline: 10px;
    border: 1px solid var(--golden-text-color);
    border-radius: 4px;
    background-color: #fff;

    &:hover {
      background-color: var(--golden-text-color);
      color: #fff;
    }
  }
`;

export const StyledResultBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
