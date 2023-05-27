import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/deprecated/AppLink',
  component: AppLink,
  decorators: [RouterDecorator()],
  args: {
    to: '/',
    children: 'Ссылка'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
  theme: AppLinkTheme.INVERTED
};

export const Blue = Template.bind({});
Blue.args = {
  theme: AppLinkTheme.BLUE
};
