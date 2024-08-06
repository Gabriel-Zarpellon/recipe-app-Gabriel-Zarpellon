import styled from "styled-components";

export const StyledUpperRecipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 2rem;
  padding-top: 2rem;
  background-color: var(--background-color);
  text-align: justify;

  img {
    height: 100%;
    width: 100%;
    max-height: 300px;
    max-width: 400px;
    border-radius: 8px;
  }

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 1rem;
    padding-inline: 1rem;
    padding-top: 0;
  }
`;

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;

    @media (max-width: 760px) {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;

    & > div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const StyledMidRecipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 32px;
  padding-bottom: 1rem;
  gap: 1rem;
  background-color: var(--background-color);
  text-align: justify;

  @media (max-width: 690px) {
    padding-inline: 1rem;
  }
`;

export const StyledBottomRecipe = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-inline: 32px;
  padding-top: 0.625rem;
  gap: 1rem;

  & > button {
    height: 32px;
    width: 56px;
    border: 1px solid var(--red-text-color);
    color: var(--red-text-color);
    border-radius: 4px;

    &:hover {
      background-color: var(--red-background-color);
      color: var(--red-text-color);
    }
  }

  & > button:first-child {
    color: var(--primary-text-color);
    border: 1px solid var(--golden-text-color);

    &:hover {
      background-color: var(--golden-text-color);
      color: #fff;
    }
  }
`;
