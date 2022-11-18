import { Box, Container } from "@mui/material"
import SingUp from "../../components/SingUp/SingUp"
import s from '../Register/Register.module.css'

const Register = () => {
  return (
   <Container sx={{border: '2px solid red'}}>
     <Box className={s.registerBlock}> 
       <SingUp />
     </Box>
   </Container>
  )
}
export default Register 
