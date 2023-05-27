import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import ArticleEditPage from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
