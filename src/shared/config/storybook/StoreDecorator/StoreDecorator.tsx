import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
