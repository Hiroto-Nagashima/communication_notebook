import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, DraggableDialog } from './DraggableDialog';


export default {
  title: 'Molecules/DraggableDialog',
  component: DraggableDialog,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],

} as Meta;

const Template: Story<Props> = (args) => <DraggableDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  dialogContentText:"この内容で登録しますか？",
  dialogTitle: "登録確認",
  buttonLabel: "登録",
  cancelButtonLabel: "戻る",
  submitButtonLabel: "登録"
};


