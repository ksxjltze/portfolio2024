'use client'
// components/ThemeToggle.tsx
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border-2 p-2 rounded-full text-background bg-primary hover:border-[var(--emphasis)] transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-background" />
      ) : (
        <SunIcon className="h-5 w-5 text-background" />
      )}
    </button>
  );
};

export default ThemeToggle;