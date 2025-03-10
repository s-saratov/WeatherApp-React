import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

#root {
  display: flex;
  min-height: 100%;
  font-family: Inter, Lato, sans-serif;
}
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles;