import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => (
  <UiDesignSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
