import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { DetailsContainer } from './DetailsContainer';

export default {
  title: 'pages/ArticleDetailsPage/DetailsContainer',
  component: DetailsContainer,
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args) => (
  <DetailsContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
