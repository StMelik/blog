import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/shared/constants/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator.tsx';
import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

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
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(FeatureFlagsDecorator({}));
