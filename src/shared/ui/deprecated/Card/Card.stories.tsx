import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'shared/deprecated/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <Text
      title='Заголовок'
      text='Параграф'
    />
  )
};
