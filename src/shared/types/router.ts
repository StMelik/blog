import { RouteProps } from 'react-router';
// eslint-disable-next-line fsd-import-helper/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
