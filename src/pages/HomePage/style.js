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
