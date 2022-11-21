import { Grid } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { IFavoriteType } from "../../types/favorite";
import UserEquipmentItem from "../ShopCart/ShopCartItemList/UserEquipmentItem/UserEquipmentItem";

interface IFavoritesProps{
    items: IFavoriteType[]
    removeItem: any
}

export default function ShopCartItemList({items, removeItem}: IFavoritesProps){
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
                        quantity={null}
                        img={item.img}
                        icon={<BookmarkRemoveIcon />} 
                        callback={removeItem}/>
                )
            }
        </Grid>
    )
}