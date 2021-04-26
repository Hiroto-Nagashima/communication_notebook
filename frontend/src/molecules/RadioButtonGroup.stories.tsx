import { Story, Meta } from '@storybook/react';
import { Props, RadioButtonsGroup } from './RadioButtonsGroup';

export default {
  title: 'Molecules/RadioButtonsGroup',
  component: RadioButtonsGroup,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <RadioButtonsGroup {...args} />;

export const HasBathed = Template.bind({});
HasBathed.args = {
  title: "入浴",
  labels: ["有", "無"]
};


