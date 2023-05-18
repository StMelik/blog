import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetUserAuthData, getUserAuthData] = buildSelector(
  (state: StateSchema) => state.user.authData
);
