import { Reducer } from '@reduxjs/toolkit';
import { ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager
} from '@/app/providers/StoreProvider';

export type ReducersList = {
  // eslint-disable-next-line no-unused-vars
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLouderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactElement;
}

export const DynamicModuleLouder = (props: DynamicModuleLouderProps) => {
  const { reducers, removeAfterUnmount, children } = props;

  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager; // Переделается

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (mounted) return;

      store.reducerManager.add(name as StateSchemaKey, reducer);

      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);

          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
