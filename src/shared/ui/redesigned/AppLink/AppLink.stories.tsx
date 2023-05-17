import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/',
    children: 'Test'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'red'
};