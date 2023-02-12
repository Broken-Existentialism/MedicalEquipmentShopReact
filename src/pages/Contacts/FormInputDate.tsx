import { FC } from "react"
import { Controller} from "react-hook-form"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from "@mui/material";
import { DatePicker} from "@mui/x-date-pickers";

import moment from "moment";

interface IFormInputDateProps{
    name: string,
    label: string,
    controlCallback: any,
    dateFormat: string,
    errorMessage: string | undefined,
}

export const FormInputDate: FC<IFormInputDateProps> = ({name, label, controlCallback, dateFormat, errorMessage}) =>{
    return(
        <Controller 
            name={name}
            control={controlCallback}
            render={({field})=>(
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        label={label}
                        value={ field.value ? moment(field.value, dateFormat) : null}
                        onChange={(date)=>{field.onChange(moment(date).format(dateFormat))}}
                        renderInput={(params) => <TextField 
                                helperText={errorMessage}
                                {...params} 
                            />
                        }
                    />
                </LocalizationProvider>
            )}
        />
    )
}