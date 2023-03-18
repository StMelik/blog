import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';


interface <FTName | camelcase>Props {

}

export const <FTName | camelcase> = createAsyncThunk<RETURN_SCHEMA, void, ThunkConfig<string>>(
  '...?/[FTName % camelcase]',
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<RETURN_SCHEMA>('/...?');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
