import { IconButton } from "@mui/material";
import { logout } from "../../api/authentificationServiceApi";
import LogoutIcon from '@mui/icons-material/Logout';
import { useActions } from "../../hooks/useActions";

export function SingOut () {

    const {setDefaultUserProfile} = useActions()
    
    const singOut = async () =>{
        logout()
        setDefaultUserProfile()
    }

    return(
        <IconButton onClick={singOut} aria-label='logout'>
            <LogoutIcon sx={{color:'#434343', fontSize:'2rem !important'}}/>
        </IconButton>
    )
}