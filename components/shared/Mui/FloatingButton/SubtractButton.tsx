import Fab from '@mui/material/Fab';
import { ComponentPropsWithRef } from 'react';
import { GoDash } from "react-icons/go";

interface ISubtractButtonProps extends ComponentPropsWithRef<any> {
    handleClick: () => void
}

export default function SubtractButton({handleClick}:ISubtractButtonProps) {
  return (
      <Fab size='small' color="primary" aria-label="subtract" onClick={handleClick}>
        <GoDash  size={20}/>
      </Fab>
  );
}