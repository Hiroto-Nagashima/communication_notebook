import { Story, Meta } from '@storybook/react';
import  {CircularDeterminate, Props} from './Spinner';

export default {
  title: 'atoms/Spinner',
  component: CircularDeterminate,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <CircularDeterminate {...args} />;

export const BlueProgress = Template.bind({});
BlueProgress.args = {
  color: "blue"
};

export const RedProgress = Template.bind({});
RedProgress.args = {
  color: "red"
};

