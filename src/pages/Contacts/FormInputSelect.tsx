import { FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material"
import { FC } from "react"
import { Controller } from "react-hook-form"

interface ISelectOptions{
    value: string,
    label: string,
}

interface IFormInputSelectProps{
    name: string,
    label: string,
    controlCallback: any,
    selectOptions: ISelectOptions[]

}

export const FormInputSelect: FC<IFormInputSelectProps>= ({name, label, controlCallback, selectOptions}) =>{

    const generateSelectOptions = () =>{
        return selectOptions.map((selectOption, index)=>{
            return (
                <MenuItem key={index} value={selectOption.value}>
                    {selectOption.label}
                </MenuItem>
            )
        })
    }

    return(
        <Controller 
            name={name}
            control={controlCallback}
            render={({field})=>(
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label={label}
                            value={field.value} 
                            onChange={field.onChange} 
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                generateSelectOptions()
                            }
                        </Select>
                    </FormControl>
                )
            }
        />
    )
}