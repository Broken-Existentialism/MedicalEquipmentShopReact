import { Grid } from "@mui/material";
import { IShopCartEquipment } from "../../../types/shopCartEquipment";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import UserEquipmentItem from "./UserEquipmentItem/UserEquipmentItem";

interface IShopCartProps{
    items: IShopCartEquipment[]
    removeItem: any
}

export default function ShopCartItemList({items, removeItem}: IShopCartProps){
    return(
        <Grid container direction="column">
            {
                items.map((item, index)=>
                    <UserEquipmentItem
                        key={index}
                        id={item.id}
                        name={item.name}
                        year={item.year}
                        price={item.price}
                        quantity={item.quantity}
                        img={item.img}
                        icon={<RemoveShoppingCartIcon />} 
                        callback={removeItem}/>
                )
            }
        </Grid>
    )
}