import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { FC } from "react"
import { Controller } from "react-hook-form"

const options = [
    {
        label: "Radio Option 1",
        value:  "1",
    },
    {
        label: "Radio Option 2",
        value:  "2",
    },
    {
        label: "Radio Option 3",
        value:  "3",
    },
]

interface IRadioOptions{
    label: string,
    value: string,
}

interface IFormInputRadioProps{
    name: string,
    label: string,
    controlCallback: any,
    radioOptions: IRadioOptions[]
}

export const FormInputRadio: FC<IFormInputRadioProps> = ({name, controlCallback, label, radioOptions}) =>{

    const generateRadioOptions = () => {
        return radioOptions.map((singleOption, index) =>(
            <FormControlLabel
                key={index}
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
            />
          )
        )
    }

    return(
        <Controller 
            name={name}
            control={controlCallback}
            render={({field}) =>(
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={field.value} 
                        onChange={field.onChange}
                    >
                        {
                            radioOptions.map((singleOption, index) =>(
                                <FormControlLabel
                                    key={index}
                                    value={singleOption.value}
                                    label={singleOption.label}
                                    control={<Radio />}
                                />))
                        }
                    </RadioGroup>
                </FormControl>
                )
            }
        />
    )
}