import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
  title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  decorators: [RouterDecorator()]
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = (args) => (
  <AdditionalInfoContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    articleDetails: {
      data: {
        createdAt: '25.01.2029',
        views: 2532,
        user: {
          username: 'Admin'
        }
      }
    }
  })
];
