import { TextField } from "@mui/material"
import { FC } from "react"
import { Controller } from "react-hook-form"

interface IFormInputTextProps{
    name: string,
    controlCallback: any,
    label: string,
    placeHolder: string,
    errorMessage: string | undefined,
    fullWidth: boolean
}

export const FormInputText: FC<IFormInputTextProps>= ({name, controlCallback, label, placeHolder, errorMessage, fullWidth}) =>{
    return(
       <Controller
            name={name}
            control={controlCallback}
            render={({field})=><TextField
                    type='text' 
                    value={field.value}
                    onChange={field.onChange}
                    label={label}
                    fullWidth={fullWidth}
                    placeholder={placeHolder}
                    helperText={errorMessage}
                />
            }
        />
    )
}