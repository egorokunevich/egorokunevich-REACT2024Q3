import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};
