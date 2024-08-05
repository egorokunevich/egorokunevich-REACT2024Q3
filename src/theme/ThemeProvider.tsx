'use client';

import { createContext, PropsWithChildren, useState } from 'react';

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
