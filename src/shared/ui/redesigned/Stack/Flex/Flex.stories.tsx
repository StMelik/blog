import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </>
    )
  }
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4'
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8'
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16'
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32'
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column'
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  gap: '16'
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  direction: 'column',
  align: 'end'
};
