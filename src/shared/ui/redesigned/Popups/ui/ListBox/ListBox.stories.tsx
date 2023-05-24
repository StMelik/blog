import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { ListBox } from './ListBox';

export default {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  args: {
    direction: 'bottom right',
    items: [
      {
        content: 'Хонда',
        value: '1',
        disabled: true
      },
      {
        content: 'Мерседес',
        value: '2'
      },
      {
        content: 'Астон Мартин',
        value: '3'
      }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 150 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: 'Выбор марки авто'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Выбор марки авто'
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
  label: 'Выбор марки авто'
};

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
