import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import SwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { FC, memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/constants/theme';

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
      <SwitcherIcon
        fill={theme === Theme.LIGHT ? IconTheme.LIGHT : IconTheme.DARK}
      />
    </Button>
  );
});
