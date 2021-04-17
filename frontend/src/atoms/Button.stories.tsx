import { Story, Meta } from '@storybook/react';
import { Props, MyButton } from './Button';
import { Grid } from '@material-ui/core';

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

export const GridButton = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <MyButton variant="contained" color= "primary" label="ログイン" />
    </Grid>
  </Grid>
);
