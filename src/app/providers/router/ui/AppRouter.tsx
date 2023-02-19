import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
