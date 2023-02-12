import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { FC } from "react"
import { Controller } from "react-hook-form"

interface ICheckboxOptions{
    value: string,
    label: string,
}

interface IFormInputMultiCheckboxProps{
    name: string,
    controlCallback: any,
    label: string,
    checkboxOptions: ICheckboxOptions[]
}

export const FormInputMultiCheckbox: FC<IFormInputMultiCheckboxProps> = ({name, controlCallback, label, checkboxOptions}) =>{

    const generateCheckboxOptions = () =>{
        return checkboxOptions.map((checkboxOption, index)=>(
                <FormControlLabel
                    key={index}
                    label={checkboxOption.label}
                    control={
                        <Checkbox checked={true}/>
                    }
                />
            )
        )
    }

    return(
        <Controller 
            name={name}
            control={controlCallback}
            render={({field})=>( 
                    <FormControl >
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup>
                        {
                            checkboxOptions.map((checkboxOption, index)=>(
                                    <FormControlLabel
                                        key={index}
                                        label={checkboxOption.label}
                                        control={
                                            <Checkbox 
                                                checked={field.value.includes(checkboxOption.value)}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        field.onChange([...field.value, checkboxOption.value]);
                                                    } else {
                                                        field.onChange(field.value.filter((value: any) => value !== checkboxOption.value));
                                                    }
                                                }}
                                            />
                                        }
                                    />
                                )
                            )
                        }
                    </FormGroup>
                    </FormControl>
                )
            }
        />
    )
}