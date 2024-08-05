import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  height: 100vh;
  background: #00000040;
  z-index: 2;

  overflow-y: scroll;

  @media (min-width: 690px) {
    overflow-y: visible;
  }
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
`;

export const StyledModalBox = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  padding-bottom: 1rem;
`;
