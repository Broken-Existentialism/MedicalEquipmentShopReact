import { Container } from "@mui/material"
import { deleteShopCartEquipmentById, getAllShopCartEquipments } from "../../api/shopCartServiceApi"
import { Box, CircularProgress} from '@mui/material'
import ShopCartItemList from "../../components/ShopCart/ShopCartItemList/ShopCartItemList"
import { useActions } from "../../hooks/useActions"
import { useTypeSelector } from "../../hooks/useTypeSelector"

const ShopCart = () =>{

    let {items, error, loading} = useTypeSelector(state => state.shopCart)

    let {fetchShopCartEquipments} = useActions()

      const removeItem = async (id: number) =>{
        await deleteShopCartEquipmentById(id)
        var result = await getAllShopCartEquipments()
        fetchShopCartEquipments()
      }

    return(
        <Container>
            {
                loading
                ? <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                        <CircularProgress sx={{color:'#A4C9FF'}} />
                  </Box>
                : <ShopCartItemList 
                    items={items}
                    removeItem={removeItem}
                    />
            }   
        </Container>
    )
}

export default ShopCart