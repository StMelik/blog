import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  args: {
    trigger: <Button>Открыть Dropdown</Button>,
    direction: 'bottom right',
    items: [
      {
        content: 'Главная',
        disabled: true
      },
      {
        content: 'Профиль'
      },
      {
        content: 'Настройки'
      }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 150, width: 'max-content' }}>{Story()}</div>
    )
  ]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left'
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left'
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right'
};
