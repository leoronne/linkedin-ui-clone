import React, { createContext, useState, useContext, useCallback } from 'react';

import { ThemeName } from '../styles/themes';

interface ThemeContextProps {
  setThemeName: React.Dispatch<React.SetStateAction<'old' | 'new'>>;
  themeName: string;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    try {
      const theme = localStorage.getItem('@LinkedIn:theme') === 'old' ? 'old' : 'new';
      return theme;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
      return 'new';
    }
  });

  const changeTheme = useCallback(() => {
    try {
      const theme = themeName === 'new' ? 'old' : 'new';
      setThemeName(theme);
      localStorage.setItem('@LinkedIn:theme', theme);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  }, [themeName]);

  return <ThemeContext.Provider value={{ themeName, setThemeName, changeTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
