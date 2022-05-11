import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { lightTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
