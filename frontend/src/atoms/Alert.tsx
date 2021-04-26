import { VFC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export type Props={
  status: "error" | "warning" | "info" | "success"
  label : string
}
export const SimpleAlerts:VFC<Props>=(props)=> {
  const classes = useStyles();
  const { status, label} = props
  return (
    <div className={classes.root}>
      <Alert severity={status}>{label}</Alert>
    </div>
  );
}