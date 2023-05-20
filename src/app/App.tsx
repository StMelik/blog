/* eslint-disable i18next/no-literal-string */
import { getUserInited, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoaderPage } from '@/widgets/LoaderPage';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

function App() {
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <div
            id='app'
            className='app-redesigned'
          >
            <AppLoaderLayout />
          </div>
        }
        off={<LoaderPage />}
      />
    );
  }

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <div
          id='app'
          className={classNames('app-redesigned', {}, [])}
        >
          <Suspense fallback=''>
            <MainLayout
              content={<AppRouter />}
              header={<NavBar />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div
          id='app'
          className={classNames('app', {}, [])}
        >
          <Suspense fallback=''>
            <NavBar />
            <div className='content-page'>
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
}

export default withTheme(memo(App));
