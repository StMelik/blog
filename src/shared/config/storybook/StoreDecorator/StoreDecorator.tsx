import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react/types-6-0';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
