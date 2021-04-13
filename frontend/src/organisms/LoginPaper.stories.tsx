import { Story, Meta } from '@storybook/react';
import { LoginPaper, Props } from './LoginPaper';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { ComposedTextField } from '../atoms/TextField';
import { MyButton } from '../atoms/Button';
import { LoginButton } from '../atoms/Button.stories';
import React from 'react';

export default {
  title: 'organisms/LoginPaper',
  component: LoginPaper,
} as Meta;

const Template: Story<Props> = (args) => <LoginPaper {...args} />;

export const Default = Template.bind({});
Default.args = {
  title :"連絡帳"
};
// export const Default =(args)=>{
//   <Paper elevation={3}>
//     <Box component="h1" p={2} textAlign="center">
//       連絡帳
//     </Box>
//     <ComposedTextField textName="Email" placeholder="xxxxx@xxx.ne.jp"/>
//     <ComposedTextField textName="Password" placeholder="xxxxxxxxx"/>
//     <LoginButton {...LoginButton.args}/>
//   </Paper>
// }
