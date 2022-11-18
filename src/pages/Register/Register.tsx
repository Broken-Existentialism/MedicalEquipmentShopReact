import { Box, Container } from "@mui/material"
import SignUp from "../../components/SignUp/SingUp"
import s from '../Register/Register.module.css'

const Register = () => {
  return (
   <Container sx={{border: '2px solid red'}}>
     <Box className={s.registerBlock}> 
       <SignUp />
     </Box>
   </Container>
  )
}
export default Register 
