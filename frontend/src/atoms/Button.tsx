import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { VFC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export type Props={
  variant: "text" | "outlined" | "contained"
  color: "inherit" | "primary" | "secondary" | "default"
  label: string
  url?: string
  size?: "small" | "medium" | "large"
}

export const MyButton:VFC<Props>=(props)=> {
  const {variant, color,label, url,size } = props
  // const classes = useStyles();
  return (
    <>
      <Button variant={variant} color={color} href={url} size={size}>
      {label}
      </Button>
    </>
  );
}