import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme
}) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.DARK
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (isThemeInited || !initialTheme) return;

    setTheme(initialTheme);
    setIsThemeInited(true);
  }, [initialTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
