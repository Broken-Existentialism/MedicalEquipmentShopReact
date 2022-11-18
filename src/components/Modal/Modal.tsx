import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SignIn from '../SignIn/SingIn';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface IProfileModal{
  isAuth: boolean
}

export default function ProfileModal({isAuth}:IProfileModal) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="login">
            <LoginOutlinedIcon  sx={{color:'#434343', fontSize:'2rem !important'}}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {
          isAuth
          ? <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
               <GppGoodIcon fontSize='large' sx={{color: 'green'}}/>
               <Box component="span" sx={{fontSize:'18px'}}>The user is logged in</Box>
            </Box>
          : <SignIn onCloseModal={handleClose} />
        }
        </Box>
      </Modal>
    </div>
  );
}