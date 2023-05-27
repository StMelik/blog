import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
