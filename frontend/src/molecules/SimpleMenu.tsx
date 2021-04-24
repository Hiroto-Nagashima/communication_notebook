import React, { VFC, ChangeEvent, MouseEventHandler } from 'react';
import { Button, Input, Menu, MenuItem } from '@material-ui/core';

const OPTIONS = [
  { value: 0, label: '悪い' },
  { value: 1, label: '普通' },
  { value: 2, label: '良い' },
]

export type Props={
  onClickMenuItem: (event: React.MouseEvent<HTMLElement>, index: number) => void
  Index: number
  anchorEl: HTMLElement | null
  onClose: ()=>void
  onClickButton:MouseEventHandler<HTMLButtonElement>
}

export const SimpleMenu:VFC<Props>=(props)=> {
  const{ onClickMenuItem, onClose, onClickButton, Index, anchorEl } = props
  console.log(Index)
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={onClickButton} color="primary">
        機嫌
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {OPTIONS.map((option, index) => (
          <MenuItem
            key={option.value}
            value={option.label}
            selected={index === Index }
            onClick={(event)=>onClickMenuItem(event, index)}
            // onClick={(event) => handleMenuItemClick(event, index)}
          >
          { option.label }
          </MenuItem>
        ))}
      </Menu>
      <Input value={OPTIONS[1].label} readOnly/>
    </div>
  );
}
