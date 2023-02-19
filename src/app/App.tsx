import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route
            path='/'
            element={<MainPage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
