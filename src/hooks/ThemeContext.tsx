import React, { useState, useCallback, createContext, useContext } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export interface ThemeProps {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

const ThemeContext = createContext<ThemeProviderProps>(
  {} as ThemeProviderProps,
);

interface ThemeProviderProps {
  theme: ThemeProps;
  handleChangeTheme(): void;
}

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(light);

  const handleChangeTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeProviderProps => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
