import { Container } from "@mui/system";
import { useEffect } from "react";
import { deleteFavoriteById, getAllFavorites } from "../../api/favoriteServiceApi";
import FavoritesItemList from "../../components/Favorites/FavoritesItemList";
import { Loading } from "../../components/Loading/Loading";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export function Favorites(){

    const{items, loading} = useTypeSelector(state => state.favorites)

    let {fetchFavoritesEquipments} = useActions()
    
    const removeItem = async (id: number) =>{
        await deleteFavoriteById(id)
    
        fetchFavoritesEquipments()
      }

    return(
       <Container >
           {
                loading
                ? <Loading />
                : <FavoritesItemList
                    items={items}
                    removeItem={removeItem}
                    />
            }  
       </Container>
    )
}