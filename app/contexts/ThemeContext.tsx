'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'frutiger-aero';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  changeTheme: (theme: Theme) => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  changeTheme: (theme: Theme) => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme = 'light'}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If user has previously set a preference, use that
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } 
    // Otherwise use system preference
    else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPreference);
      document.documentElement.classList.add(systemPreference);
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update HTML class for Tailwind
    document.documentElement.classList.remove('light', 'dark', 'frutiger-aero');
    document.documentElement.classList.add(newTheme);
  };

  const changeTheme = (newTheme : Theme) => {
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update HTML class for Tailwind
    document.documentElement.classList.remove('light', 'dark', 'frutiger-aero');
    document.documentElement.classList.add(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};