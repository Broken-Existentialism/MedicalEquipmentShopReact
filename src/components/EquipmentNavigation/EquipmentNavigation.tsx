import { useEffect, useState } from "react";
import { getAllBrands } from "../../api/brandServiceApi";
import { getAllEquipmentTypes } from "../../api/equipmentTypeServiceApi";
import { IBrandType } from "../../types/brand";
import { IEquipmentType } from "../../types/equipmentType";
import SelectComponent from "../Select/Select"
  
const EquipmentNavigation = ({setColumnNameForSorting, setSortDirection, setFilterType, setFilterBrand}: any) =>{

    const [brands, setBrands] = useState<IBrandType[]>([])
    const [equipmentTypes, setequipmentTypes] = useState<IEquipmentType[]>([])

    const columnNameForSorting = ['Price', 'Year']
    const sortingValue = [ 'Ascending', 'Descending']

    useEffect(()=>{
        const fetchData = async () =>{
            var brandsResult = await getAllBrands()
            setBrands(brandsResult.data)

            var equipmentTypesResult = await getAllEquipmentTypes()
            setequipmentTypes(equipmentTypesResult.data)
        }
        fetchData()
      },[])
      
    return(
       <div>
            <SelectComponent items={sortingValue} name={'Sorting'} handleChangeProps={setSortDirection}/>
            <SelectComponent items={columnNameForSorting} name={'Column Name For Sorting'} handleChangeProps={setColumnNameForSorting}/>
            <SelectComponent items={equipmentTypes.map(item => item.name)} name={'Equipment Types'} handleChangeProps={setFilterType}/>
            <SelectComponent items={brands.map(item => item.title)} name={'Brands'} handleChangeProps={setFilterBrand}/>
       </div>
    )
}

export default EquipmentNavigation