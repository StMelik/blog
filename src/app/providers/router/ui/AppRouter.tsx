import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { LoaderPage } from 'widgets/LoaderPage';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () => Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    }),
    [isAuth]
  );

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
});
