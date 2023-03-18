import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (artcleId, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`/articles/${artcleId}`);

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
