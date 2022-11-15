import { Box, CircularProgress, Grid, Pagination } from '@mui/material'
import { IMedicalEquipmentType } from '../../types/medicalEquipments'
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
            ? <Box sx={{flex: '1 1 auto' , display:'flex', alignItems:'center', justifyContent:'center',}}>
                <CircularProgress sx={{color:'#A4C9FF'}}/>
              </Box>
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
                              img={item.img}/>)
                }
               </Grid>
        }
        <Pagination count={count} page={pageIndex} onChange={changePage} size="large" sx={{margin:'10px 0px 10px 0px'}}/>
      </Box>
    )
}

export default EquipmentList


