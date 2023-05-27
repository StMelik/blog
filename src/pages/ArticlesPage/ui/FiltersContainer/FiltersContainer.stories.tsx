import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { FiltersContainer } from './FiltersContainer';

export default {
  title: 'pages/ArticlesPage/FiltersContainer',
  component: FiltersContainer,
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof FiltersContainer>;

const Template: ComponentStory<typeof FiltersContainer> = (args) => (
  <FiltersContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
