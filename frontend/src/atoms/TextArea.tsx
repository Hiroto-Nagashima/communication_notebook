import React, { VFC } from 'react';
import TextField from '@material-ui/core/TextField';

export type Props={
  label: string
  row: number
}

// 列の指定ができるTextarea
export const MultilineTextField:VFC<Props>=(props)=> {
  const { label,row } = props
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
    id="outlined-multiline-static"
    value={value}
    onChange={handleChange}
    label={label}
    multiline
    rows={row}
    variant="outlined"
    style={{width:"100%"}}
  />
  );
}
