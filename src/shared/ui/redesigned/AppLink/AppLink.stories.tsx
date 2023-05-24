import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
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
  variant: 'primary'
};

export const Red = Template.bind({});
Red.args = {
  variant: 'red'
};
