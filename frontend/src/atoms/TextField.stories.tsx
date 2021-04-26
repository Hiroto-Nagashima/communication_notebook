import { Story, Meta } from '@storybook/react';
import { Props, ComposedTextField } from './TextField';
import { Grid } from '@material-ui/core';

export default {
  title: 'atoms/TextField',
  component: ComposedTextField,
} as Meta;

const Template: Story<Props> = (args) => <ComposedTextField {...args} />;

export const Email = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <ComposedTextField textName="Email" placeholder="xxxxx@xxx.ne.jp"/>
    </Grid>
  </Grid>
);

export const Password = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <ComposedTextField textName="Password" placeholder="xxxxx"/>
    </Grid>
  </Grid>
);

export const BodyTemperature = (args:Props)=>(
  <Grid container>
    <Grid item xs={6}>
      <ComposedTextField textName="体温" placeholder="36.x" value={1} />
    </Grid>
  </Grid>
);

