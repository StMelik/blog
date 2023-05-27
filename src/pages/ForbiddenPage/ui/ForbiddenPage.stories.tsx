import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
  <ForbiddenPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
