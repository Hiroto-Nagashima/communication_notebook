import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, SimpleMenu } from './Menu';


export default {
  title: 'Molecules/Menu',
  component: SimpleMenu,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],

} as Meta;



const Template: Story<Props> = (args) => <SimpleMenu {...args} />;

export const Mood = Template.bind({});
Mood.args = {
  options: [
    "悪い", "普通", "良い"
  ],
  label: "機嫌"
};


