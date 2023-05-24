import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    size: 'm',
    value: 'Проверочный текст'
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryS = Template.bind({});
PrimaryS.args = { size: 's' };

export const PrimaryL = Template.bind({});
PrimaryL.args = { size: 'l' };

export const Placeholder = Template.bind({});
Placeholder.args = {
  value: '',
  placeholder: 'Плейсхолдер'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Название инпута'
};

export const Readonly = Template.bind({});
Readonly.args = { readonly: true };

export const AddonLeft = Template.bind({});
AddonLeft.args = { addonLeft: <span>{'<'}</span> };

export const AddonRight = Template.bind({});
AddonRight.args = { addonRight: <span>{'>'}</span> };
