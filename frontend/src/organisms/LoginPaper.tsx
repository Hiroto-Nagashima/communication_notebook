import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { ComposedTextField } from '../atoms/TextField';

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

export default function LoginPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3}>
        <Box component="h1" p={2} textAlign="center">
          連絡帳
        </Box>
        <ComposedTextField textName="Email" placeholder="xxxxx@xxx.ne.jp"/>
        <ComposedTextField textName="Password" placeholder="xxxxxxxxx"/>
      </Paper>
    </div>
  );
}