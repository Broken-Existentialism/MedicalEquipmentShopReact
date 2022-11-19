import { Box, Button, Grid } from "@mui/material";
import s from '../UserEquipmentItem/UserEquipmentItem.module.css'

interface IUserEquipmentItemProps{
    id: number,
    name: string,
    price: number,
    year: number,
    quantity: number | null,
    img: string | null,
    icon: any,
    callback: any,
}


export default function UserEquipmentItem({id, name, year, price, quantity, img, icon, callback}: IUserEquipmentItemProps){
    return(
        <Grid item sx={{
            marginBottom:'10px',
            width: '50%',
            height: '150px',
            boxShadow: '0 2px 18px rgb(0 0 0 / 15%)',
            display: 'flex',
            alignItems:'flex-end',
            justifyContent:'space-between',
            padding: '20px'
            }}
        > 
           <Box sx={{display:'flex', alignItems:'center', height:'100%'}}>
            <Box  className={s.imageBlock}>
                <img src={img ? img : undefined}  alt='Error'/>
            </Box>
            <Box className={s.infoBlock}>
                <Box sx={{fontSize: '12px'}}>Id: {id}</Box>
                <Box sx={{color:'#3550aa', fontSize: '17px'}}>{`${name} ${year}`}</Box>
                <Box sx={{color:'#d96857'}} >Price: {price} $</Box>
                <Box >{quantity ? `Quantity: ${quantity}` : ''}</Box>
            </Box>
           </Box>
            <Button onClick={() => callback(id)} variant="contained" color='error' startIcon={icon}>
                Delete
            </Button>
        </Grid>
    )
}