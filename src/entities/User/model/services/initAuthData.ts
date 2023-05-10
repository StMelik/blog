import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/UserSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    try {
      if (!userId) {
        return rejectWithValue('');
      }

      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue('error');
      }

      return response;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
