import { useGetJsonSettings } from '@/entities/User';
import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => () => {
  const { theme: defaultTheme } = useGetJsonSettings();

  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <Component />
    </ThemeProvider>
  );
};
