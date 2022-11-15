import { Grid, Pagination, Paper, styled } from '@mui/material'
import { Container} from '@mui/system'
import { useEffect, useState } from 'react'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import s from './Catalog.module.css'

const Catalog = () =>{
   
    /*
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
    */
    return(
        <Container> 
            <Grid container rowSpacing={0} columnSpacing={2}>
                <Grid item xs={2.5}>
                    <div className={s.block}>
                        1
                    </div>
                </Grid>
                <Grid item xs={9.5}>
                    <EquipmentList /> 
                </Grid>
            </Grid>
           
        </Container>
    )
}

export default Catalog