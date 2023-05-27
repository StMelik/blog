import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { NotFoundPage } from './NotFoundPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
