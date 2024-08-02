import styled, { css } from "styled-components";
import search from "../../assets/search.svg";


export const StyledSection = styled.section`
  & div:first-child {
    max-width: 600px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;

    button{
      background-color: var(--golden-text-color);
      height: 40px;
      width: 40px;
      border-radius: 0 0.5rem 0.5rem 0;
      color: #FFF;

      &:hover{
        opacity: 0.8;
      }

    }
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

  border-radius: 0.5rem 0 0 0.5rem;

  &:focus {
    outline: 1px solid var(--golden-color);
  }
`;

export const StyledRadioList = styled.ul`
  &:after {
    content: "";
    clear: both;
  }

  li {
    height: 30px;
    width: 90px;
    background-color: #fff;
    color: var(--golden-text-color);

    border-radius: 1rem;
    float: left;
    position: relative;

    & > label {
      background: #fff no-repeat center center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      border-radius: 1rem;

      & > span {
        z-index: 1;
        font-family: "IBM Plex Mono", sans-serif;
        font-size: 14px;
        font-weight: 500;
      }

      & > input {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 1rem;
        border: 0.0625rem solid transparent;
        &:hover {
          border: 0.0625rem solid var(--golden-text-color);
        }

        &:checked {
          background-color: #a37e3c;

          + span {
            color: #ffffff;
          }
        }
      }
    }
    @media (min-width: 600px) {
      height: 35px;
    }
  }
`;
