import { Story, Meta } from '@storybook/react';
import { Props, SimpleAlerts } from './Alert';

export default {
  title: 'atoms/Alert',
  component: SimpleAlerts,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],

} as Meta;

const Template: Story<Props> = (args) => <SimpleAlerts {...args} />;

export const Error = Template.bind({});
Error.args = {
  status: "error",
  label: "This is an error alert — check it out!"
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
  label: "This is a warning alert — check it out!"
};

export const Info = Template.bind({});
Info.args = {
  status: "info",
  label: "This is an info alert — check it out!"
};

export const Success = Template.bind({});
Success.args = {
  status: "success",
  label: "This is a success alert — check it out!"
};