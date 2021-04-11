import React from 'react';
import { Story, Meta } from '@storybook/react';

import {DatePickers} from './DatePickers';
import { Props } from './DatePickers';

export default {
  title: 'atoms/DatePickers',
  component: DatePickers,
  argTypes: { onAccept: { action: 'clicked' } },
  // タブバーで特定の色を試せる
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <DatePickers {...args} />;

export const OpenFalse = Template.bind({});
OpenFalse.args = {
  open: false
};

export const OpenTrue = Template.bind({});
OpenTrue.args = {
  open: true
};

