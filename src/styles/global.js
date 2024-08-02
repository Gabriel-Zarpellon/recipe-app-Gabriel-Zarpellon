import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --golden-text-color: #9a7026;
    --primary-text-color: #1c272b;
    --secondary-text-color: #40403f;

    --background-color: #f8f7f3;

    --golden-color: #d6c5a7; 

    --green-text-color: #93b060;
    --green-background-color: #f3f5c4;

    --purple-text-color: #7472b1;
    --purple-background-color: #efedfa;

    --red-text-color: #f8716b;
    --red-background-color: #fdeae3;

    --teal-text-color: #5faba9;
    --teal-background-color: #e7f8f2;

    --blue-text-color: #87afc8;
    --blue-background-color: #e8f5fb;

    --orange-text-color: #e19849;
    --orange-background-color: #fff1ce;
   
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lora", sans-serif;
  }


ul,
ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
  background-color: transparent;
}

img {
 max-width: 100%;
}

input {
  border: none;
  background-color: transparent;
}

a {
    text-decoration: none;
}
`;
