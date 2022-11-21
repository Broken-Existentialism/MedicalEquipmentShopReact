import { Box, Grid, Pagination } from '@mui/material'
import { IMedicalEquipmentType } from '../../types/medicalEquipments'
import { Loading } from '../Loading/Loading'
import EquipmentItem from './EquipmentItem/EquipmentItem'

interface IEquipmentListProps{
  items: IMedicalEquipmentType[]
  pageIndex: number,
  isLoading: boolean,
  count: number,
  changePage: any,
}

const EquipmentList = ({items, pageIndex, isLoading, count, changePage}:IEquipmentListProps) =>{
    return(
      <Box sx={{display: 'flex', alignItems:'center', flexDirection:'column', minHeight:'100%'}}>
        {
            isLoading 
            ? <Loading />
            : <Grid container rowSpacing={3} columnSpacing={3} >
                {
                  items.map((item, index) => 
                          <EquipmentItem 
                              key={index}
                              id={item.id}
                              name={item.name}
                              year={item.year}
                              price={item.price}
                              brand={item.brand}
                              equipmnetType={item.equipmnetType}
                              img={item.img} 
                              categoryName={item.categoryName}/>)
                }
               </Grid>
        }
        <Pagination count={count} page={pageIndex} onChange={changePage} size="large" sx={{margin:'10px 0px 10px 0px'}}/>
      </Box>
    )
}

export default EquipmentList


