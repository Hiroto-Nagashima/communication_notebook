import { Story, Meta } from '@storybook/react';

import { MenuAppBar, Props } from './Header';

export default {
  title: 'organisms/Header',
  component: MenuAppBar,
  argTypes: {
    barColor:{
      control:{
        type: 'radio',
        options: ["inherit", "default", "primary", "secondary",'transparent']
      }
    } ,
    iconColor:{
      control:{
        type: 'radio',
        options: ["inherit", "default", "primary", "secondary"]
      }
    } ,
  },
  args:{
    title:"Communication Notebook",
    kid:{
      name: "太郎",
      nursery_name: "第一保育園"
    }
  }
} as Meta;

const Template: Story<Props> = (args) => <MenuAppBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  auth:true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  auth:false
};
