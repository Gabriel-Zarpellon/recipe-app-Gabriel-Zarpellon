import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: clamp(1.25rem, 1.071rem + 0.476vw, 1.5rem);
  font-weight: 600;
`;

export const StyledTextInput = styled.input`
  background-color: #fff;
  height: 32px;
  width: 400px;
  max-width: 100%;
  border-radius: 4px;
  padding-left: 1rem;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;

export const StyledSelectInput = styled.select`
  background-color: #fff;
  border: none;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 4px;
  color: var(--primary-text-color);
  font-weight: 600;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;

export const StyledNumberInput = styled.input`
  width: 100%;
  height: 2rem;
  background-color: #fff;
  padding-left: 1rem;
  border-radius: 4px;

  -moz-appearance: textfield;
  appearance: textfield;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  padding-left: 1rem;
  padding-top: 6px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;
