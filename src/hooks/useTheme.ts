import { useContext } from 'react';
import { ThemeContext, ThemeProviderProps } from '../contexts/ThemeContext';

const useTheme = (): ThemeProviderProps => {
  const context = useContext(ThemeContext);

  return context;
};

export default useTheme;
