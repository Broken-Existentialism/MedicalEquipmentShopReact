import { Container } from "@mui/material"
import { deleteShopCartEquipmentById, getAllShopCartEquipments } from "../../api/shopCartServiceApi"
import ShopCartItemList from "../../components/ShopCart/ShopCartItemList/ShopCartItemList"
import { useActions } from "../../hooks/useActions"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { Loading } from "../../components/Loading/Loading"

const ShopCart = () =>{

    let {items, loading} = useTypeSelector(state => state.shopCart)

    let {fetchShopCartEquipments} = useActions()

    const removeItem = async (id: number) =>{
      await deleteShopCartEquipmentById(id)
      
      fetchShopCartEquipments()
    }

    return(
        <Container>
            {
                loading
                ? <Loading />
                : <ShopCartItemList 
                    items={items}
                    removeItem={removeItem}
                    />
            }   
        </Container>
    )
}

export default ShopCart