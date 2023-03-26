import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit, getArticlesPageNum
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchMoreArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchMoreArticlesList',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    const hasMore = getArticlesPageHasMore(getState());
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }
);
