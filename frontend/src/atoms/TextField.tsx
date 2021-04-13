import React, { VFC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(70),
      },
    },
  }),
);

export type Props ={
  textName: string
  placeholder: string
}
export const ComposedTextField:VFC<Props>=(props)=> {
  const { textName, placeholder } = props
  const [name, setName] = React.useState('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">{textName}</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label={textName} placeholder={placeholder} />
      </FormControl>
    </form>
  );
}
