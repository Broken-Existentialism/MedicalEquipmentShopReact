import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Box, Grid, Typography, CircularProgress } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { IRegisterRequest} from "../../types/authentication";
import { registration } from "../../api/authentificationServiceApi";
import { useState } from "react";
import GppBadIcon from '@mui/icons-material/GppBad';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { MAIN_ROUTE } from "../../utils/consts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const schema = yup.object({
    firstName: yup.string()
      .required("First name is required")
      .max(50, "Fitst name should have a maximum length of 50"),
    lastName: yup.string()
      .required("Last name is required")
      .max(50, "Last name should have a maximum length of 50"),
    email: yup.string()
      .required("Email address is required")
      .email("Please provide a valid email address"),
    phoneNumber: yup.string()
      .required("Phone number is is required")
      .min(9, "Phone number should have a minimum length of 9")
      .max(20, "Phone number should have a minimum length of 20"),
    password: yup.string()
      .required("Password is required")
      .min(6, "Password should have a minimum length of 6")
      .max(20, "Password should have a maximum length of 20"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], "Passwords don't match")
      .required("Confirm password is required"),
  }).required();

export default function SignUp(){
  
  const navigate = useNavigate()

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword:'',
    },
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  
  const onSubmit = async (data : IRegisterRequest) =>{
    setLoading(true)
    try
    {
      let result = await registration(data)
      navigate(MAIN_ROUTE)
      console.log(result)
    }
    catch(ex: any)
    {
      setError(ex.response.data)
    }
    setLoading(false)
  }
  return (
    <Box sx={{
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '5% auto'
      }}
    >
      {
        loading ? <CircularProgress sx={{color:'#A4C9FF'}}/> : <></>
      }
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /> </Avatar>
      <Typography component="h1" variant="h5"> Sign Up </Typography>
      {
        error 
        ? <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center', margin:'10px'}}> 
            <GppBadIcon fontSize="large" sx={{color:'red'}}/> 
            <Box component="span"> {error.error.replace('Authentication failed: -- DuplicateEmail: ', ' ')} </Box>
          </Box> 
        : <></>
      }
      <Box component="form"  onSubmit={handleSubmit(onSubmit)} >
        <Grid container direction='row' spacing={2} justifyContent="center" alignItems="flex-start">
          <Grid item xs={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <TextField 
                  fullWidth
                  margin="normal"
                  required
                  label="First Name" 
                  type="text"  
                  autoFocus
                  helperText={errors?.firstName && String(errors.firstName.message)} 
                  placeholder="First Name"{...field} />}/>
          </Grid>
          <Grid item xs={6}>
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <TextField 
                    fullWidth
                    margin="normal"
                    required
                    label="Last Name" 
                    type="text"  
                    autoFocus
                    helperText={errors?.lastName && String(errors.lastName.message)} 
                    placeholder="Last Name"{...field} />}/>
          </Grid>
        </Grid>
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
                placeholder="Email Address"{...field} />}/>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <TextField 
              fullWidth
              margin="normal"
              required
              label="Phone Number" 
              type="text"  
              autoFocus
              helperText={errors?.phoneNumber && String(errors.phoneNumber.message)} 
              placeholder="Phone Number"{...field} />}/>
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
                placeholder="Password" {...field} />}/>
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
                placeholder="Confirm Password" {...field} />}/>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
            >
            Sign In
        </Button>
        <Grid item>
          <NavLink to={MAIN_ROUTE} >
            <Box sx={{display:'flex', alignItems:'center'}}>
              <Box component='span' sx={{fontSize:'16px' }}>Go back to the main page</Box>
              <ArrowBackIcon fontSize="medium"/>
            </Box>
          </NavLink>
        </Grid>  
    </Box>
  </Box>
  )
}


