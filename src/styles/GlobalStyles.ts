import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
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

  :root {
    --color-header: #283e4a;
    --color-linkedin: #0077b5;
    --color-input: #e1e9ee;
    --color-icons: #c7d1d8;
    --color-hashtag: #7a8b98;
    --color-background: #f5f5f5;
    --color-ad-text: #434649;
    --color-nav-border: #5c6f7c;
    --color-panel: #fff;
    --color-link: #0073b1;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-white: #fff;
    --cool-gray-20: #f3f6f8;
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
    transition: 0.6s ease-in-out !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
    transition: 0.6s ease-in-out !important;
  }

  a {
    transition: filter 0.6s ease !important;
  }

  a:hover{
    transition: filter 0.6s ease !important;
    filter: brightness(1.2);
  }

  button {
    transition: 0.6s ease !important;
  }

  button:hover{
    transition: 0.6s ease !important;
  }

`;
