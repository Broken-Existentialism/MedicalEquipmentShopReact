import { Button, Grid} from '@mui/material'
import { Container} from '@mui/system'
import { useEffect} from 'react'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import EquipmentNavigation from '../../components/EquipmentNavigation/EquipmentNavigation'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

const Catalog = () =>{

    let filters = useTypeSelector(state => state.filters)

    const {setFilters, setColumnForSorting, setPageIndex, setSortDirection, setDefaulFilters} = useActions()

    const {items, loading, total, pageSize} = useTypeSelector(state => state.medicalEquipments)

    const changePage = (event: any, value: number) =>{
      setPageIndex(value)
    }

    const setFilterType = (value: string) =>{
      setFilters({
        name: filters.name,
        brandTitle: filters.brandTitle,
        typeName: value,
      })
    }

    const setFilterBrand = (value: string) =>{
      setFilters({
        name: filters.name,
        brandTitle: value,
        typeName: filters.typeName,
      })
    }

    const setColumnNameForSorting = (value: string) =>{
      setColumnForSorting(value)
    }

    const setSortDirectionCallback = (value: string) =>{
      setSortDirection(value)
    }
    
    const {fetchMedicalEquipments} = useActions()
    
    useEffect(()=>{
      const fetchData = async () =>{
        fetchMedicalEquipments({
          pageIndex: filters.pageIndex,
          pageSize: filters.pageSize,
          columnNameForSorting: filters.columnNameForSorting,
          sortDirection: filters.sortDirection,
          requestFilters: {
            name: filters.name,
            brandTitle: filters.brandTitle,
            typeName: filters.typeName
          }
        })
      }
      fetchData()
    }, [filters])

    useEffect(() =>{
      return function cleanup() {
        setDefaulFilters()
      }
    },[])

    return(
        <Container> 
            <Grid container rowSpacing={0} columnSpacing={2}>
                <Grid item xs={2.5} sx={{height:'560px'}}>
                    <EquipmentNavigation 
                      setColumnNameForSorting={setColumnNameForSorting}
                      setSortDirection={setSortDirectionCallback}
                      setFilterType={setFilterType}
                      setFilterBrand={setFilterBrand}/>
                      <Button variant="outlined" color="error" onClick={setDefaulFilters}>
                        Reset filters
                      </Button>
                </Grid>
                <Grid item xs={9.5}>
                    <EquipmentList 
                        pageIndex={filters.pageIndex} 
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