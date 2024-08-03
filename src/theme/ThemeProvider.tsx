'use client';

import {
  createContext,
  PropsWithChildren,
  useState,
  CSSProperties,
} from 'react';

export interface ColorsCSS extends CSSProperties {
  '--bg-color': string;
  '--primary-color': string;
  '--secondary-color': string;
  '--card-color': string;
  '--card-color-hover': string;
}

export interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<IThemeContext['theme']>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
