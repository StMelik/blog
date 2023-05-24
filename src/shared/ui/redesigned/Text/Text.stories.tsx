import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  args: {
    variant: 'primary',
    align: 'left',
    size: 'm',
    HeaderTag: 'h3',
    title: 'Заголовок текста',
    text: '"Хонда" - это компания, которая исторически росла, принимая вызовы и побеждая в гонках мирового уровня.'
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  text: undefined
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  title: undefined
};

export const AccentVariant = Template.bind({});
AccentVariant.args = {
  variant: 'accent'
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
  variant: 'error'
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  align: 'center'
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  align: 'right'
};

export const SizeS = Template.bind({});
SizeS.args = {
  size: 's'
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: 'l'
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};
