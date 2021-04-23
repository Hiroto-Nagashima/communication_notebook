import { Story, Meta } from '@storybook/react';

import { Props, InputOfNotebook} from './InputOfNotebook';

export default {
  title: 'organisms/InputOfNotebook',
  component: InputOfNotebook,

} as Meta;

const Template: Story<Props> = (args) => <InputOfNotebook {...args} />;

export const Default = Template.bind({});
Default.args = {

};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   auth:false
// };
