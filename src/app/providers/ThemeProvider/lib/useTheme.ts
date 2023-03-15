import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const getNextTheme = () => {
    const values = Object.values(Theme);
    const index = values.findIndex((v) => v === theme);

    return index === values.length - 1 ? values[0] : values[index + 1];
  };

  const toggleTheme = () => {
    const newTheme = getNextTheme();

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  };
};
