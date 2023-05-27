import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { ViewSelectorContainer } from './ViewSelectorContainer';

export default {
  title: 'pages/ArticlesPage/ViewSelectorContainer',
  component: ViewSelectorContainer,
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ViewSelectorContainer>;

const Template: ComponentStory<typeof ViewSelectorContainer> = (args) => (
  <ViewSelectorContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
