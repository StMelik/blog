import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    tabs: [
      {
        value: '1',
        content: 'Хонда'
      },
      {
        value: '2',
        content: 'Мерседес'
      },
      {
        value: '3',
        content: 'Астон Мартин'
      }
    ],
    onTabClick: action('onTabClick')
  }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

export const WithSelected = Template.bind({});
WithSelected.args = {
  value: '2'
};

export const ColumnDirection = Template.bind({});
ColumnDirection.args = {
  direction: 'column'
};
