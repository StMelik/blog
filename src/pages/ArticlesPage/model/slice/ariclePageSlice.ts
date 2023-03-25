import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { AriclePageSchema } from '../types/AriclePageSchema';

const initialState: AriclePageSchema = {
  isLoading: false,
  error: undefined,
  entities: {},
  ids: [],
  view: ArticleView.GRID
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(initialState)
);

export const ariclePageSlice = createSlice({
  name: 'ariclesPage',
  initialState: articlesAdapter.getInitialState(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: ariclePageActions } = ariclePageSlice;
export const { reducer: ariclePageReducer } = ariclePageSlice;
