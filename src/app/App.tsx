import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>Toggle THEME</button>
      <AppRouter />
    </div>
  );
};
