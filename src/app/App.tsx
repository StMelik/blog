/* eslint-disable i18next/no-literal-string */
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';

export function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={classNames('app', {}, [theme])}>
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
