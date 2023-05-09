/* eslint-disable no-unused-vars */

import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ScrollSaveSchema } from '@/features/ScrollSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
