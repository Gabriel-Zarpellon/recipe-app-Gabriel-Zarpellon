import styled, { css } from "styled-components";
import plate from "../../../assets/plate.svg";

export const StyledRecipeCard = styled.li`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding-bottom: 0.5rem;
  border: 0.0625rem solid transparent;

  & div:first-child {
    position: relative;

    img {
      border-radius: 8px 8px 0 0;
    }

    span {
      position: absolute;
      left: 1rem;
      top: 1rem;

      ${({ meal }) => {
        if (meal == "breakfast") {
          return css`
            background-color: var(--green-background-color);
            color: var(--green-text-color);
          `;
        } else if (meal == "lunch") {
          return css`
            background-color: var(--purple-background-color);
            color: var(--purple-text-color);
          `;
        } else if (meal == "supper") {
          return css`
            background-color: var(--teal-background-color);
            color: var(--teal-text-color);
          `;
        } else if (meal == "snack") {
          return css`
            background-color: var(--orange-background-color);
            color: var(--orange-text-color);
          `;
        }
      }}

      padding-inline: 10px;
      padding-block: 3px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 4px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 1rem;
      padding-inline: 1rem;

      & > p:first-child {
        padding-inline: 10px;
        padding-block: 3px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 4px;
        ${({ level }) => {
          if (level == "begginer") {
            return css`
              background-color: var(--blue-background-color);
              color: var(--blue-text-color);
            `;
          } else if (level == "intermediate") {
            return css`
              background-color: var(--orange-background-color);
              color: var(--orange-text-color);
            `;
          } else if (level == "advanced") {
            return css`
              background-color: var(--red-background-color);
              color: var(--red-text-color);
            `;
          }
        }}
      }

      & > p:last-child {
        width: 55px;
        padding-inline: 10px;
        padding-block: 5px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 4px;
        color: var(--secondary-text-color);
        text-align: right;

        background-color: #f7f8f2;
        background-image: url(${plate});
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 5px;
      }
    }
  }

  & div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 6px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-block: 14px;
      padding-inline: 20px;
      border: 1px solid var(--golden-text-color);
      border-radius: 4px;
    }
  }

  &:hover {
    border: 0.0625rem solid var(--golden-text-color);

    button {
      background-color: var(--golden-text-color);
      color: #fff;
    }
  }
`;
