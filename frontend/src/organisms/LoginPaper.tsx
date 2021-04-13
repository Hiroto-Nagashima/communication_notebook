import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { ComposedTextField } from '../atoms/TextField';
import { MyButton } from '../atoms/Button';
import { VFC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(60),
      },
    },
  }),
);

export type Props={
  title: string
}
export const LoginPaper:VFC<Props>=(props)=> {
  const { title } = props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3}>
        <Box component="h1" p={2} textAlign="center">
          {title}
        </Box>
        <Box textAlign="center">
          <ComposedTextField textName="Email" placeholder="xxxxx@xxx.ne.jp"/>
        </Box>
        <Box textAlign="center">
          <ComposedTextField textName="Password" placeholder="xxxxxxxxx"/>
        </Box>
        <Box textAlign="center">
          <MyButton variant="contained" color="primary" label="Login"/>
        </Box>
      </Paper>
    </div>
  );
}