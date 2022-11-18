import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {NavLink } from "react-router-dom";
import { ILoginRequest } from "../../types/authentication";
import { login } from "../../api/authentificationServiceApi";

interface ISingInProps{
  onCloseModal: any
}

const schema = yup.object({
    email: yup.string()
      .required("Email address is required")
      .email("Please provide a valid email address"),
    password: yup.string()
      .required("Password is required")
      .min(6, "Password should have a minimum length of 6")
      .max(20, "Password should have a maximum length of 20"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], "Passwords don't match")
      .required("Confirm password is required"),
  }).required();

export default function SingIn({onCloseModal}: ISingInProps){

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword:'',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data : ILoginRequest) =>{
    try
    {
      let result = await login(data);
      localStorage.setItem('userId', result.data.id)
      localStorage.setItem('token', result.data.token)
      console.log(result.data)
    }
    catch(ex: any){
      console.log(ex.response.data)
    }
  }

  return (
    <Container>
       <Box sx={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField 
                        fullWidth
                        margin="normal"
                        required
                        label="Email Address" 
                        type="email"  
                        autoFocus
                        helperText={errors?.email && String(errors.email.message)} 
                        placeholder="Email Address"{...field} />}
                    />
                    <Controller 
                        name="password"
                        control={control}
                        render={({ field }) => <TextField
                            fullWidth
                            margin="normal" 
                            required
                            label="Password" 
                            type="password" 
                            helperText={errors?.password && String(errors.password.message)} 
                            placeholder="Password" {...field} />}
                    />
                    <Controller 
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => <TextField
                            fullWidth
                            margin="normal" 
                            required
                            label="Confirm Password" 
                            type="password" 
                            helperText={errors?.confirmPassword && String(errors.confirmPassword.message)} 
                            placeholder="Confirm Password" {...field} />}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
                        >
                        Sign In
                    </Button> 
                    <Grid item>
                      <NavLink to="register" onClick={onCloseModal}>
                        {"Don't have an account? Sign Up"}
                      </NavLink>
                    </Grid>
            </Box>
        </Box>
    </Container>
  );
};