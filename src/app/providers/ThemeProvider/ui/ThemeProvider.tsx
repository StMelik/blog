import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useGetJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme
}) => {
  const { theme: defaultTheme = Theme.DARK } = useGetJsonSettings();

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    document.body.className =
      localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.DARK;
  });

  useEffect(() => {
    if (isThemeInited) return;

    setTheme(defaultTheme);
    setIsThemeInited(true);
  }, [defaultTheme, isThemeInited]);

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
