import styled from "styled-components";

export const StyledRecipeList = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding-top: 3rem;

  @media (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;
