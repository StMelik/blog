/* eslint-disable i18next/no-literal-string */
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { AppRouter } from './providers/router';
import { LOCAL_STORAGE_THEME_KEY } from './providers/ThemeProvider/lib/ThemeContext';

export function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
