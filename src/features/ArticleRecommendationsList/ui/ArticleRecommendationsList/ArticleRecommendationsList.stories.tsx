import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  decorators: [withMock, RouterDecorator()]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa'
};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3&_expand=user`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' }
      ]
    }
  ]
};
