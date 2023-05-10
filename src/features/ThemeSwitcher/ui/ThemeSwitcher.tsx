import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import SwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { FC, memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/constants/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
  className?: string;
}

enum IconTheme {
  LIGHT = '#FFC700',
  DARK = '#0115C6'
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const handleToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={handleToggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      <SwitcherIcon
        fill={theme === Theme.LIGHT ? IconTheme.LIGHT : IconTheme.DARK}
      />
    </Button>
  );
});
