import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import theme from './Theme/theme';
import {ThemeProvider} from './Theme/theme-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


