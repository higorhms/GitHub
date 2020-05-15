import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
} from 'react';
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
  const [theme, setTheme] = useState<ThemeProps>(
    (): ThemeProps => {
      const storedTheme = localStorage.getItem('@GitHub:theme');

      if (!storedTheme) {
        return light;
      }
      return JSON.parse(storedTheme);
    },
  );

  useEffect(() => {
    localStorage.setItem('@GitHub:theme', JSON.stringify(theme));
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

const useTheme = (): ThemeProviderProps => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
