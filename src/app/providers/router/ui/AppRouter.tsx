import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { LoaderPage } from '@/widgets/LoaderPage';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<LoaderPage />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
            : element
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
});
