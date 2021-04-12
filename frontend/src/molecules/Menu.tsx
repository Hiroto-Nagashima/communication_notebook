import React, { VFC } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '@material-ui/core';

const options = [
  '',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];
export type Props={
  options:Array<string>
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
