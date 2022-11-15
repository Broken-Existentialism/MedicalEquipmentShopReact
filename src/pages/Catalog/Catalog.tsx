import { Grid} from '@mui/material'
import { Container} from '@mui/system'
import { useEffect, useState } from 'react'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import EquipmentNavigation from '../../components/EquipmentNavigation/EquipmentNavigation'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { IMedicalEquipmentRequest } from '../../types/medicalEquipments'

const Catalog = () =>{
    const {items, loading, total, pageIndex, pageSize} = useTypeSelector(state => state.medicalEquipments)
    
    const [paginationRequest, setPaginationRequest] = useState<IMedicalEquipmentRequest>({
        pageIndex: pageIndex,
        pageSize: pageSize,
        columnNameForSorting: '',
          sortDirection: '',
          requestFilters: {
            name: '',
            brandTitle: '',
            typeName: ''
          }
    })

    const changePage = (event: any, value: number) =>{
        setPaginationRequest(prevState =>{
            return {
              ...prevState, 
              pageIndex: value,
              }
        })
    }

    const setFilterType = (value: string) =>{
      setPaginationRequest(prevState =>{
        return {
          ...prevState,
          requestFilters:{
            name: prevState.requestFilters?.name, 
            brandTitle: prevState.requestFilters?.brandTitle, 
            typeName: value,
          }
          }
      })
    }

    const setFilterBrand = (value: string) =>{
      setPaginationRequest(prevState =>{
        return {
          ...prevState,
          requestFilters:{
            name: prevState.requestFilters?.name, 
            brandTitle: value, 
            typeName: prevState.requestFilters?.typeName,
          }
          }
      })
    }

    const setColumnNameForSorting = (value: string) =>{
      setPaginationRequest(prevState =>{
        return {
          ...prevState, 
          columnNameForSorting: value,
          }
      })
    }

    const setSortDirection = (value: string) =>{
      setPaginationRequest(prevState =>{
        return {
          ...prevState, 
          sortDirection: value,
          }
      })
    }

    const {fetchMedicalEquipments} = useActions()
    
    useEffect(()=>{
      const fetchData = async () =>{
        fetchMedicalEquipments(paginationRequest)
      }
      fetchData()
    }, [paginationRequest])
    
    return(
        <Container> 
            <Grid container rowSpacing={0} columnSpacing={2}>
                <Grid item xs={2.5} sx={{height:'560px'}}>
                    <EquipmentNavigation 
                      setColumnNameForSorting={setColumnNameForSorting}
                      setSortDirection={setSortDirection}
                      setFilterType={setFilterType}
                      setFilterBrand={setFilterBrand}/>
                </Grid>
                <Grid item xs={9.5}>
                    <EquipmentList 
                        pageIndex={paginationRequest.pageIndex} 
                        items={items} 
                        isLoading={loading} 
                        changePage={changePage} 
                        count={Math.ceil(total / pageSize) ? Math.ceil(total / pageSize): 0} /> 
                </Grid>
            </Grid>
           
        </Container>
    )
}

export default Catalog