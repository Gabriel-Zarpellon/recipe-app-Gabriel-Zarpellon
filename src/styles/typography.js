import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
  
  ${({ number }) => {
    if (number == 1) {
      return css`
        font-size: clamp(2rem, 2.143rem + 0.952vw, 3rem);
      `;
    } else if (number == 2) {
      return css`
        font-size: clamp(1.5rem, 1.143rem + 0.952vw, 2rem);
      `;
    } else if (number == 3) {
      return css`
        font-size: clamp(1.5rem, 1.232rem + 0.714vw, 2rem);
      `;
    } else if (number == 4) {
      return css`
        font-size: clamp(1.25rem, 1.071rem + 0.476vw, 1.5rem);
      `;
    } else if (number == 5) {
      return css`
        font-size: clamp(1rem, 0.911rem + 0.238vw, 1.125rem);
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      return css`
        color: var(--golden-text-color);
      `;
    } else {
      return css`
        color: var(--primary-text-color);
      `;
    }
  }}
`;

export const StyledParagraph = styled.p`
  font-size: clamp(0.875rem, 0.786rem + 0.238vw, 1rem);

  ${({ color }) => {
    if (color) {
      return css`
        color: var(--secondary-text-color);
      `;
    } else {
      return css`
        color: var(--primary-text-color);
      `;
    }
  }}
`;

export const StyledAnchor = styled.a`
  font-size: 1rem;
  ${({ color }) => {
    if (color) {
      return css`
        color: var(--golden-text-color);
      `;
    } else {
      return css`
        color: var(--secondary-text-color);
      `;
    }
  }}
`;