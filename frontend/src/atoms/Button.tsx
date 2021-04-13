import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
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
}

export const MyButton:VFC<Props>=(props)=> {
  const {variant, color, label, url } = props
  // const classes = useStyles();
  return (
    <SButton variant={variant} color={color} href={url}>
      {label}
    </SButton>
  );
}
const SButton=styled(Button)`
  width: 100%
`