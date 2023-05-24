import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Текст',
    variant: 'outline',
    color: 'normal',
    size: 'm'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const PrimaryL = Template.bind({});
PrimaryL.args = {
  size: 'l'
};

export const PrimaryXL = Template.bind({});
PrimaryXL.args = {
  size: 'xl'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const Clear = Template.bind({});
Clear.args = {
  variant: 'clear'
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled'
};

export const Success = Template.bind({});
Success.args = {
  color: 'success'
};

export const Error = Template.bind({});
Error.args = {
  color: 'error'
};

export const AddonLeft = Template.bind({});
AddonLeft.args = {
  addonLeft: <span>{'<'}</span>
};

export const AddonRight = Template.bind({});
AddonRight.args = {
  addonRight: <span>{'>'}</span>
};
