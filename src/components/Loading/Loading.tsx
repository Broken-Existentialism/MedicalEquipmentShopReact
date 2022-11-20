import { Box, CircularProgress } from "@mui/material";

export function Loading(){
    return(
        <Box sx={{flex: '1 1 auto' , display:'flex', alignItems:'center', justifyContent:'center',}}>
                <CircularProgress sx={{color:'#A4C9FF'}}/>
        </Box>
    )
}