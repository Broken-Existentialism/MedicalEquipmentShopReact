import { Box, CircularProgress, Grid, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import EquipmentItem from './EquipmentItem/EquipmentItem'

const EquipmentList = () =>{

    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const medicalEquipmentsState = useTypeSelector(state => state.medicalEquipments)
    const {fetchMedicalEquipments} = useActions()
    
    useEffect(()=>{
      const fetchData = async () =>{
        fetchMedicalEquipments({
          pageIndex: page,
          pageSize: 3,
          columnNameForSorting: '',
          sortDirection: '',
          requestFilters: {
            name: '',
            brandTitle: '',
            typeName: ''
          }
        })
  
      }
      fetchData()
    },[page])

    return(
      <Box sx={{display: 'flex', alignItems:'center', flexDirection:'column', minHeight:'100%'}}>
        {
            medicalEquipmentsState.loading 
            ? <Box sx={{flex: '1 1 auto' , display:'flex', alignItems:'center', justifyContent:'center',}}>
                <CircularProgress sx={{color:'#A4C9FF'}}/>
              </Box>
            : <Grid container rowSpacing={3} columnSpacing={3} >
                {
                  medicalEquipmentsState.items.map((item, index) => 
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
        <Pagination count={Math.ceil(medicalEquipmentsState.total / medicalEquipmentsState.pageSize)} page={page} onChange={handleChange} size="large" sx={{margin:'10px 0px 10px 0px'}}/>
      </Box>
    )
}

export default EquipmentList


