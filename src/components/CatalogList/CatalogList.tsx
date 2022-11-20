import s from './CatalogList.module.css'
import CatalogListItem from './CatalogListItem/CatalogListItem'
import { Container } from '@mui/system'
import { CATALOG_ROUTE, CATALOG_ROUTE_NESTED } from '../../utils/consts'
/*
import LaboratoryIcon from '../../assets/images/catalog/laboratory.png'
import AmbulanceIcon from '../../assets/images/catalog/ambulance.png'
import DentistryIcon from '../../assets/images/catalog/dentistry.png'
import FlukeBiomedicalIcon from '../../assets/images/catalog/fluke.png'
import GynecologyIcon from '../../assets/images/catalog/gynecology.png'
import SterilizationIcon from '../../assets/images/catalog/sterilization.png'
import SurgeryIcon from '../../assets/images/catalog/surgery.png'
import DiagnosticsIcon from '../../assets/images/catalog/diagnostics.png'
import OphthalmologyIcon from '../../assets/images/catalog/ophthalmology.png'
import TomographyIcon from '../../assets/images/catalog/tomography.png'
*/
import { useEffect, useState } from 'react'
import { getAllCategories } from '../../api/categoryServiceApi'
import { ICategoryType } from '../../types/category'
import { Loading } from '../Loading/Loading'

const CatalogList = () =>{

    const [categoryItems, setCategoryItems] = useState<ICategoryType[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            try
            {
                let result = await getAllCategories()
                setCategoryItems(result.data)
            }
            catch(ex: any)
            {
                setError(ex)
            }
            setLoading(false)
        }
        fetchData()
      }, [])

    return (
        <Container>
            {
                loading
                ? <Loading />
                : <div className={s.catalogGrid}>
                        {
                            categoryItems.map((item, index)=> <CatalogListItem title={item.name} icon={item.img} path={`${CATALOG_ROUTE}/${item.name}`} key={index}/>)
                        }
                 </div>
            }
        </Container>
    )
}


export default CatalogList