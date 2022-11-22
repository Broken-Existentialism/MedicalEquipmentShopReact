import { Visibility, VisibilityOff } from "@mui/icons-material";
import {IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

interface IOutlinedAdornmentPasswordProps{
    placeHolderText: string,
    errorMessange: string | undefined,
    name: string,
    inputLable: string,
    callbackControll: any
}

export function OutlinedAdornmentPassword({callbackControll, name, inputLable, errorMessange, placeHolderText}:IOutlinedAdornmentPasswordProps){

    const [isShow, showPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
        showPassword(!isShow)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return(
        <Controller
                 name={name}
                 control={callbackControll}
                 render={({ field }) => 
                 <TextField 
                     fullWidth
                     margin="normal"
                     required
                     label={inputLable} 
                     type={isShow ? 'text' : 'password'} 
                     helperText={errorMessange} 
                     placeholder={placeHolderText} {...field} 
                     InputProps={
                      {
                        endAdornment: <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                        >
                                          {isShow ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                      </InputAdornment>
                      }}/>}/>
    )
}

/*
<Controller
            name={name}
            control={callbackControll}
            render={({ field }) =>
                <FormControl 
                    fullWidth 
                    margin="normal"
                    required
                >
                    <InputLabel htmlFor="outlined-adornment-password">{inputLable}</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={isShow ? 'text' : 'password'}
                      
                      {...field}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {isShow ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>}
                        label={inputLable}/> 
                </FormControl> }
        />
*/