import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button } from '../../../Button';
import { Text } from '../../../Text';
import { Popover } from './Popover';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  args: {
    trigger: <Button>Открыть Popover</Button>,
    direction: 'bottom right',
    children: (
      <Text text='"Хонда" - это компания, которая исторически росла, принимая вызовы и побеждая в гонках мирового уровня.' />
    )
  },
  decorators: [(Story) => <div style={{ padding: 150 }}>{Story()}</div>]
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
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
