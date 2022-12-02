import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import theme from '@/Theme/theme';
import {ThemeProvider} from './Theme/theme_set';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


