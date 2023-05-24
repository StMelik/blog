import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  args: {
    variant: 'normal',
    padding: '8',
    border: 'normal',
    children: (
      <Text
        title='Заголовок'
        text='Параграф'
      />
    )
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

export const Padding0 = Template.bind({});
Padding0.args = {
  padding: '0'
};

export const Padding16 = Template.bind({});
Padding16.args = {
  padding: '16'
};

export const Padding24 = Template.bind({});
Padding24.args = {
  padding: '24'
};

export const BorderRound = Template.bind({});
BorderRound.args = {
  border: 'round'
};

export const BorderPartial = Template.bind({});
BorderPartial.args = {
  border: 'partial'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light'
};
