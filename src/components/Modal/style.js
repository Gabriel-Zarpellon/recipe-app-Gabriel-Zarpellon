import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  background: #00000040;
  z-index: 2;

  overflow: auto;
`;

export const StyledModalTitle = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: var(--primary-text-color);
  border-radius: 8px 8px 0 0;
  padding-inline: 1rem;

  ${({ type }) => {
    if (type == "add" || type == "edit") {
      return css`
        max-width: 28.25rem;
      `;
    }
  }}
`;

export const StyledModalBox = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  padding-bottom: 1rem;
  justify-content: center;

  ${({ type }) => {
    if (type == "add" || type == "edit") {
      return css`
        max-width: 28.25rem;
      `;
    }
  }}
`;

export const StyledModalArea = styled.div`
  width: fit-content;
  max-width: 100%;
`;

export const StyledModalContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding-inline: clamp(1rem, 0.286rem + 1.905vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;
