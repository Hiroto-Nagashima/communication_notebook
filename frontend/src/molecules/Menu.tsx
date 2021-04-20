import React, { VFC } from 'react';
import { Button, Input, Menu, MenuItem } from '@material-ui/core';

const OPTIONS = [
  { value: 0, label: '悪い' },
  { value: 1, label: '普通' },
  { value: 2, label: '良い' },
]

 export type Props={
  options: Array<string>
  label:string
}

export const SimpleMenu:VFC<Props>=(props)=> {
  const{ options, label} = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log(selectedIndex)
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary">
        {label}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            value={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
          { option }
          </MenuItem>
        ))}
      </Menu>
      <Input value={options[selectedIndex]} readOnly/>
    </div>
  );
}
