import { FC } from "react"
import { Controller} from "react-hook-form"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";

import { useController } from 'react-hook-form';
import moment from "moment";


interface IFormInputDateProps{
    name: string,
    label: string,
    controlCallback: any,
    dateFormat: string,
}

export const FormInputDate: FC<IFormInputDateProps> = ({name, label, controlCallback, dateFormat}) =>{
    return(
        
        <Controller 
            name={name}
            control={controlCallback}
            render={({field})=>(
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        label="Date desktop"
                        //inputFormat="MM/DD/YYYY"
                        value={field.value ? moment(field.value) : null}
                        onChange={(date)=>{field.onChange(moment(date).format())}}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            )}
        />
    )
}