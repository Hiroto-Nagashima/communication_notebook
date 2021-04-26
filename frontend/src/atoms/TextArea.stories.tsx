import { Story, Meta } from '@storybook/react';
import { Props, MultilineTextField } from './TextArea';
import { Grid } from '@material-ui/core';

export default {
  title: 'atoms/TextArea',
  component: MultilineTextField,
} as Meta;

const Template: Story<Props> = (args) => <MultilineTextField {...args} />;

export const Memo = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <MultilineTextField  label="連絡事項" row={4}/>
    </Grid>
  </Grid>
);

export const Breakfast = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <MultilineTextField label="朝食" row={4}/>
    </Grid>
  </Grid>
);

export const Dinner = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <MultilineTextField label="夕食" row={4}/>
    </Grid>
  </Grid>
);


