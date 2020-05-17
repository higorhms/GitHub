import React, { useState, useCallback, createContext, useEffect } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export interface ThemeProps {
  title: string;
  colors: {
    primary: string;
    border: string;
    background: string;
    headerText: string;
    text: string;
    subText: string;
  };
}

const ThemeContext = createContext<ThemeProviderProps>(
  {} as ThemeProviderProps,
);

export interface ThemeProviderProps {
  theme: ThemeProps;
  handleChangeTheme(): void;
}

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(
    (): ThemeProps => {
      const storedTheme = localStorage.getItem('@Higorhms-GitHub:theme');

      if (!storedTheme) {
        return light;
      }
      return JSON.parse(storedTheme);
    },
  );

  useEffect(() => {
    localStorage.setItem('@Higorhms-GitHub:theme', JSON.stringify(theme));
  }, [theme]);

  const handleChangeTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
