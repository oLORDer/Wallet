import UserRoutes from './Routes/UserRoutes';
import GlobalStyles from '../styles/global.ts';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from 'styles/theme.ts';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <UserRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
