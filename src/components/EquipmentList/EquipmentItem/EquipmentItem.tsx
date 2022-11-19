import { Grid, IconButton } from '@mui/material'
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import s from './EquipmentItem.module.css'
import { IMedicalEquipmentType } from '../../../types/medicalEquipments'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { createNewShopCartEquipment } from '../../../api/shopCartServiceApi';
import { useActions } from '../../../hooks/useActions';

const EquipmentItem = ({id, name, year, price, brand, equipmnetType, img}: IMedicalEquipmentType) =>{

    const {isAuth} = useTypeSelector(state => state.userProfile)

    const {fetchShopCartEquipments} = useActions()

    const addToShopCart = async () =>{
        var result = await createNewShopCartEquipment(id)
        fetchShopCartEquipments()
    }
    
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

                    <Button onClick={addToShopCart} variant="contained" className={s.cartBtn} disabled={!isAuth}>
                        <span>ADD TO CART</span>
                        <AddShoppingCartIcon fontSize='small' />
                    </Button>

                    <IconButton disabled={!isAuth}>
                            <FavoriteBorderIcon fontSize="large" />
                    </IconButton>
                </Box>

            </Box> 
        </Grid>
    )
}

export default EquipmentItem