import Fab from '@mui/material/Fab';
import { ComponentPropsWithRef } from 'react';
import { FiPlus } from "react-icons/fi";

interface IAddButtonProps extends ComponentPropsWithRef<any> {
    handleClick: () => void
}

export default function AddButton({handleClick}:IAddButtonProps) {
  return (
      <Fab size='small' color="primary" aria-label="add" onClick={handleClick}>
        <FiPlus size={20} />
      </Fab>
  );
}