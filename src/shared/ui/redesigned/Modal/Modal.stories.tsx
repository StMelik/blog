import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quasi fuga quam, consectetur quidem.'
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
