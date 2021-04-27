import { Story, Meta } from '@storybook/react';
import { Props, InputOfNotebook} from './InputOfNotebook';

export default {
  title: 'organisms/InputOfNotebook',
  component: InputOfNotebook,

} as Meta;

const Template: Story<Props> = (args) => <InputOfNotebook {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedDate: "2021/4/27",
  dinner: "ハンバーグ",
  breakfast: "ヨーグルト",
  memo: "元気です",
  body_temperature: 36.7,
  bath: "有",
  index: 1,
  anchorEl: null,
  isOpen: false
};

