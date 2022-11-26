import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  img {
  display: block;
  max-width: 100%;
  height: auto;
}

.list {
  list-style-type: none;
}

.link {
  text-decoration: none;
}

.container {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

  body {
    font-family: Circle;
    font-size: 14px;
    letter-spacing: 0.03em;
    background-color: #fff;
  }

  body.no-scroll {
    overflow: hidden;
  }
`;
