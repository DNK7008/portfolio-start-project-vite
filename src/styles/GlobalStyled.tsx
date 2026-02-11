import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}


body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Theme.color.font};

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  button {
    background-color: unset;
    border: none;
  }

  section:nth-of-type(odd) {
    background-color: ${Theme.color.secondaryBg};
  }
  section:nth-of-type(even) {
    background-color: ${Theme.color.primaryBg};
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}`;
