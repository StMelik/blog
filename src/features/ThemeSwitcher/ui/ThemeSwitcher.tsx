import { saveJsonSettings } from '@/entities/User';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-switcher.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { FC, memo, useCallback } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const handleToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Icon
          Svg={ThemeIcon}
          clickable
          onClick={handleToggleTheme}
        />
      }
      off={
        <Button
          className={classNames('', {}, [className])}
          onClick={handleToggleTheme}
          theme={ButtonTheme.CLEAR}
        >
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </Button>
      }
    />
  );
});
