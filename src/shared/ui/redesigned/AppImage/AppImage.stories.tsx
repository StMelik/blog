import Icon from '@/shared/assets/tests/storybook.jpg';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: Icon
};

export const Error = Template.bind({});
Error.args = {
  src: '',
  errorFallback: <div>Ошибка</div>
};
