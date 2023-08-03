import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ChatProvider } from './context/ChatProvider';
import Wrapper from './components/Wrapper';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color-dark-palette: #1a1a1a;
    --secondry-color-dark-palette: #373737;
    --blue-button-color: #3c95f4;
    --blue-active-color: #2070c6;
    --blue-gradient: linear-gradient(90deg, #3c95f4 65%, #3385dc 100%);
    --black-gradient: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  }

  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--black-gradient);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatProvider>  
        <Wrapper />
      </ChatProvider>
    </>
  );
}

export default App;
