import { Story, Meta } from '@storybook/react';
import { Props, MyButton } from './Button';

export default {
  title: 'atoms/Button',
  component: MyButton,
  argTypes: {
    color:{
      control:{
        type: 'radio',
        options: ["inherit", "primary", "secondary", "default"]
      }
    } ,
    variant:{
      control:{
        type: 'radio',
        options: ["text", "outlined", "contained"]
      }
    } ,
    size:{
      control:{
        type: 'radio',
        options: ["small", "medium", "large"]
      }
    } ,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],

} as Meta;

const Template: Story<Props> = (args) => <MyButton {...args} />;

export const LoginButton = Template.bind({});
LoginButton.args = {
  variant: "contained",
  color: "primary",
  label: "ログイン"
};

