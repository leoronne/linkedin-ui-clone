import React from 'react';

import { ThemeProvider, useTheme } from './useTheme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export { useTheme };
export default AppProvider;
