import { VolumeUp } from "@mui/icons-material"
import { Grid, Input, Slider, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC, useState } from "react"
import { Controller } from "react-hook-form"

interface IFormInputSliderProps{
    name: string,
    label: string,
    controlCallback: any,
}

export const FormInputSlider: FC<IFormInputSliderProps> = ({name, label, controlCallback}) =>{

    /*
    const [sliderValue, setsliderValue] = useState(0)

    const handleChange = (event: Event, newValue: number | number[]) =>{
        setsliderValue(newValue as number);
        setValue(name, sliderValue)
        console.log(sliderValue)
    }
    */
    return(
        <Controller 
            name={name}
            control={controlCallback}
            render={({field})=>(
                <Box>
                    <Typography id="input-slider" gutterBottom>
                        {label}
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                        <Grid item xs><Slider aria-label="Volume" value={field.value} onChange={field.onChange} /></Grid>
                        <Grid item xs={2}><Input size="small" value={field.value}/></Grid>
                    </Grid>
                </Box>
            )}
        />
    )
}