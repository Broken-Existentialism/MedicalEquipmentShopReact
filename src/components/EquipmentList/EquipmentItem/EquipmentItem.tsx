import { Grid, IconButton } from '@mui/material'
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import s from './EquipmentItem.module.css'
import { IMedicalEquipmentType } from '../../../types/medicalEquipments'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const EquipmentItem = ({id, name, year, price, brand, equipmnetType, img}: IMedicalEquipmentType) =>{
    
    return(
        <Grid item xs={4} >
            <Box className={s.gridBlock}>
                <Box className={s.imageBlock}>
                    <img src={img ? img : undefined} alt='Error'/>
                </Box>

                <Box
                    sx={{
                        height: "40%",
                        margin: "10px 0px 0px 0px"
                    }}
                    className={s.itemBigBox}
                >
                   <div className={s.equipmentId + ' ' + s.generalFontStyle}>
                        <p>Inventory number: {id}</p>
                   </div>
                   <div className={s.equipmentDescription + ' ' + s.generalFontStyle}>
                        <span>{`${equipmnetType} ${year}`}</span>
                   </div>
                   <div className={s.equipmentName + ' ' + s.generalFontStyle}>
                        <p>{name}</p>
                   </div>
                   <div className={s.equipmentBrand + ' ' + s.generalFontStyle}>
                        <p>Brand: {brand}</p>
                   </div>
                   <div className={s.equipmentPrice + ' ' + s.generalFontStyle}>
                        <p>Price: {price} $</p>
                   </div>
                </Box>

                <Box className={s.cartAndFavorites}>

                    <Button variant="contained" className={s.cartBtn}>
                        <span>ADD TO CART  </span>
                        <AddShoppingCartIcon fontSize='small' />
                    </Button>

                    <IconButton>
                            <FavoriteBorderIcon fontSize="large" />
                    </IconButton>
                </Box>

            </Box> 
        </Grid>
    )
}

export default EquipmentItem