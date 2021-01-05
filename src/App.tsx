import React from 'react';

import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks';

import Layout from './Layout';

import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';

const App: React.FC = () => {
  const { themeName } = useTheme();
  const currentTheme = themes[themeName];
  
  return (
    <ThemeProvider theme={currentTheme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
