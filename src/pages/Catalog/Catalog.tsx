import { Button, Grid} from '@mui/material'
import { Container} from '@mui/system'
import { useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import EquipmentNavigation from '../../components/EquipmentNavigation/EquipmentNavigation'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { CATALOG_ROUTE } from '../../utils/consts'

const Catalog = () =>{

    let categoryTitle: string | undefined= useParams().title
  
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
        categoryName: filters.categoryName,
      })
    }

    const setFilterBrand = (value: string) =>{
      setFilters({
        name: filters.name,
        brandTitle: value,
        typeName: filters.typeName,
        categoryName: filters.categoryName,
      })
    }

    const setFilterCategory = (value: string) =>{
      setFilters({
        name: filters.name,
        brandTitle: filters.brandTitle,
        typeName: filters.typeName,
        categoryName: value,
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
        if(categoryTitle === 'all')
        {
          fetchMedicalEquipments({
            ...filters,
            requestFilters: {
              ...filters,
            }
          })
        }
        else{
          fetchMedicalEquipments({
            ...filters,
            requestFilters: {
              ...filters,
              categoryName: categoryTitle,
            }
          })
        }
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
                      setFilterBrand={setFilterBrand}
                      setFilterCategory={setFilterCategory}
                      />
                      <Button variant="outlined" color="error" onClick={setDefaulFilters}>
                        <Link to={`${CATALOG_ROUTE}/${'all'}`}>
                          Reset filters
                        </Link>
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