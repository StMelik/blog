import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
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
  const { theme: defaultTheme } = useGetJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.DARK
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  });

  useEffect(() => {
    if (isThemeInited || !defaultTheme) return;

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
