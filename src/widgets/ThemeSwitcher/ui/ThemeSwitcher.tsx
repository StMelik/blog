import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import SwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { FC, memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

enum IconTheme {
  LIGHT = '#FFC700',
  DARK = '#0115C6'
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      <SwitcherIcon fill={theme === Theme.LIGHT ? IconTheme.LIGHT : IconTheme.DARK} />
    </Button>
  );
});
