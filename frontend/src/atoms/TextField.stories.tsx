import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, ComposedTextField } from './TextField';


export default {
  title: 'atoms/TextField',
  component: ComposedTextField,
} as Meta;



const Template: Story<Props> = (args) => <ComposedTextField {...args} />;

export const LoginEmail = Template.bind({});
LoginEmail.args = {
  textName: "Email",
  placeholder: "xxxxx@xxx.ne.jp"
};

export const LoginPassword = Template.bind({});
LoginPassword.args = {
  textName: "Password",
  placeholder: "pass"
};