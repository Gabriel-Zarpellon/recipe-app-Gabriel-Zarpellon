import styled, { css } from "styled-components";
import search from "../../assets/search.svg";

export const StyledSection = styled.section`
  & div:first-child {
    max-width: 600px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-block: 1rem;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const StyledTextInput = styled.input`
  width: 100%;
  height: 40px;
  max-width: 600px;
  padding-left: 2.25rem;
  margin-bottom: 1rem;

  background-color: #fff;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px;

  border-radius: 0.5rem;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;

export const StyledButton = styled.button`
  background-color: #fff;
  padding: 0.375rem 0.6875rem;
  border: 0.0625rem solid transparent;
  border-radius: 1rem;

  ${({ checked }) => {
    if (checked == true) {
      return css`
        background-color: var(--golden-color);
        color: #fff;
      `;
    } else {
      return css`
        background-color: #fff;
        color: var(--golden-text-color);
      `;
    }
  }}

  &:hover {
    border: 0.0625rem solid var(--golden-color);
  }
`;

export const StyledRadioInput = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

export const StyledRadioLabel = styled.label`
  background-color: #fff;
  padding: 0.375rem 0.6875rem;
  border-radius: 1rem;
  border: 0.0625rem solid transparent;
  color: var(--golden-text-color);

  input:checked + label {
    background-color: var(--golden-color);
    color: #fff;
  }

  input:hover + label {
    border: 0.0625rem solid var(--golden-color);
    cursor: pointer;
  }
`;
