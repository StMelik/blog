import { AppRoutes } from '@/shared/constants/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ReactElement } from 'react';

export function useAppToolbar() {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    [AppRoutes.MAIN]: <div>MAIN</div>,
    [AppRoutes.ABOUT]: <div>ABOUT</div>
  };

  return toolbarByAppRoute[appRoute];
}
