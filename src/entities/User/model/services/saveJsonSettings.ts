import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/JsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
  const { dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  try {
    if (!userData) {
      return rejectWithValue('');
    }

    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData?.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings
        }
      })
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('error');
    }

    return response.jsonSettings;
  } catch (error) {
    console.log(error);

    return rejectWithValue('error');
  }
});
