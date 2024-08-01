import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  & > div {
    width: 100%;
    display: flex;

    & > div {
      width: 100%;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-block: 20px;

      & > li {
        & > a:hover {
          text-decoration: underline;
        }
      }
    }

    & > div:last-child {
      display: none;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    padding-top: 0;
    & > div {
      ul {
        display: none;
      }
    }

    ul {
      flex-direction: row;
      gap: 1.25rem;
      & > div:first-child {
        justify-content: none;
      }

      & > div:last-child {
        display: flex;
        align-items: center;
        gap: 0.625rem;
      }
    }
  }
`;
