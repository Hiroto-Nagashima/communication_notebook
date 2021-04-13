import { Story, Meta } from '@storybook/react';

import { Footer, Props } from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "&copy; 2021 test Inc."
};
