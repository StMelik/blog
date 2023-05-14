import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import ThemeIcon from '@/shared/assets/icons/theme-switcher.svg';
import { FC, memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
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
      <Icon
        Svg={ThemeIcon}
        width={40}
        height={40}
        inverted
      />
    </Button>
  );
});
