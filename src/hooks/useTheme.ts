import { useContext } from 'react';
import { ThemeContext, ThemeProviderProps } from '../contexts/ThemeContext';

const useTheme = (): ThemeProviderProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('Context must be used within an ThemeProvider');
  }

  return context;
};

export default useTheme;
