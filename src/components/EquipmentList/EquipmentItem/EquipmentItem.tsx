import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { IEquipmentItem } from '../../../types/types'
import imageTest from '../../../assets/images/e058fd563e2d3541029bf59bd05e4a60.jpg'
import imageTestSecond from '../../../assets/images/54cf4ab256d4661982de27c4a442e175.jpg'
import s from './EquipmentItem.module.css'

const EquipmentItem = ({Id, Name, Year, Price, Brand, Type, Img}:IEquipmentItem) =>{
    
    return(
        <Grid item xs={4} >
            <Box className={s.gridBlock}>
                <Box className={s.imageBlock}>
                    <img src={imageTestSecond} alt='Error'/>
                </Box>

                <Box
                    sx={{
                        background: "blue",
                        height: "40%",
                        margin: "10px 0px 0px 0px"
                    }}
                >
                    2
                </Box>

                <Box
                    sx={{
                            background: "green",
                            height: "20%",
                            margin: "10px 0px 0px 0px"
                        }}
                >
                3
                </Box>

            </Box> 
        </Grid>
    )
}

export default EquipmentItem