import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import SwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
  className?: string;
}

enum IconTheme {
  LIGHT = '#FFC700',
  DARK = '#0115C6'
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      <SwitcherIcon fill = {theme === Theme.LIGHT ? IconTheme.LIGHT : IconTheme.DARK} />
    </Button>
  );
};
