import { addDecorator } from '@storybook/react';
import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { Theme } from '../../src/shared/constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: ['app', Theme.DARK], color: '#303030' },
      { name: 'light', class: ['app', Theme.LIGHT], color: '#ededed' },
      { name: 'orange', class: ['app', Theme.ORANGE], color: '#fa9d3a' }
    ]
  }
};

addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
addDecorator(FeatureFlagsDecorator({}));
