import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    width: 100%;
    background-color: var(--background-color);
    padding-inline: 2rem;
    padding-top: 2rem;
  }

  button {
    height: 2rem;
    color: #fff;
    background-color: var(--golden-text-color);
    margin-inline: 1rem;
    margin-top: 1rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const StyledUpperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledMidBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledServingsBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledBottomBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
