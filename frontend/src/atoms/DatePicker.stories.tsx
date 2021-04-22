import React from 'react';
import { Story, Meta } from '@storybook/react';

import {DatePicker, Props} from './DatePicker';


export default {
  title: 'atoms/DatePickers',
  component: DatePicker,
  // タブバーで特定の色を試せる
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],

} as Meta;


const Template: Story<Props> = (args) => <DatePicker {...args} />;

export const OpenFalse = Template.bind({});
OpenFalse.args = {

};

export const OpenTrue = Template.bind({});
OpenTrue.args = {

};

