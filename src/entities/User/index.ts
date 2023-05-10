export { userReducer, userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/UserSchema';

export { UserRole } from './model/consts/consts';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
  isUserAdmin,
  isUserManager,
  getUserRoles
} from './model/selectors/roleSelectors';

export { useGetJsonSettings } from './model/selectors/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';
