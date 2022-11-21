import { Box, IconButton} from "@mui/material";
import { logout } from "../../api/authentificationServiceApi";
import LogoutIcon from '@mui/icons-material/Logout';
import { useActions } from "../../hooks/useActions";

interface ISignOutProps{
    firstName: string,
    lastName: string,
}

export function SignOut ({firstName, lastName}:ISignOutProps) {

    const {setDefaultUserProfile, setDefaultShopCart, setDefaultFavorites} = useActions()
    
    const singOut = async () =>{
        logout()
        setDefaultUserProfile()
        setDefaultShopCart()
        setDefaultFavorites()
    }

    return(
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <IconButton onClick={singOut} aria-label='logout'>
                <LogoutIcon sx={{color:'#434343', fontSize:'2rem !important'}}/>
            </IconButton>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Box component='span' sx={{textAlign:'center'}}>Hello,</Box>
                <span>{firstName + ' ' + lastName}</span>
            </Box>
        </Box>
    )
}