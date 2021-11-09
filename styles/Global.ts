import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #CAFAFE;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}

.container{
  display: flex;
  justify-content: center;
}

`;

export default GlobalStyles;
