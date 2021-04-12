import React, { VFC } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export type Props={
  title:string
  labels:Array<string>
}

export const RadioButtonsGroup:VFC<Props>=(props)=> {
  const { title, labels} = props
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup aria-label={title} value={value} onChange={handleChange}>
        {labels.map((label, index)=>(
          <FormControlLabel key={index} value={label} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}