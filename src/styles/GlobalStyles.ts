import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
    ${props => {
      const { theme } = props;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
    scroll-behavior: smooth;
  }

  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3333;
  }

  ::-webkit-scrollbar-thumb {
    background: #89777a;
    border-radius: 4px;
    transition: var(--transition) !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
    transition: var(--transition) !important;
  }

  a {
    transition: filter var(--transition) !important;
  }

  a:hover{
    transition: filter var(--transition) !important;
    filter: brightness(1.2);
  }

  button {
    transition: var(--transition) !important;
  }

  button:hover{
    transition: var(--transition) !important;
  }

`;
