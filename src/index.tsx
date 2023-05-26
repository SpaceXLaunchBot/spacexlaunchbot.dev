import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
