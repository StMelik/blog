import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
