import '../style/index.scss';
import { Route, Routes } from 'react-router';

import { Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense, useState } from 'react';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames';

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
            element={<MainPageLazy />}
          />
          <Route
            path='/about'
            element={<AboutPageLazy />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
