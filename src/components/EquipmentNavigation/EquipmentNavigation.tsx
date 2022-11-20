import { useEffect, useState } from "react";
import { getAllBrands } from "../../api/brandServiceApi";
import { getAllEquipmentTypes } from "../../api/equipmentTypeServiceApi";
import { IBrandType } from "../../types/brand";
import { IEquipmentType } from "../../types/equipmentType";
import { SORT_DIRECTION_ASCENDING, SORT_DIRECTION_DESCENDING } from "../../utils/consts";
import SelectComponent from "../Select/Select"

const EquipmentNavigation = ({setColumnNameForSorting, setSortDirection, setFilterType, setFilterBrand}: any) =>{

    const [brands, setBrands] = useState<IBrandType[]>([])
    const [equipmentTypes, setequipmentTypes] = useState<IEquipmentType[]>([])

    const columnNameForSorting: string[] = ['Price', 'Year']
    const sortingValue: string[] = [ SORT_DIRECTION_ASCENDING, SORT_DIRECTION_DESCENDING]

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
            <SelectComponent items={sortingValue} name={'Sorting direction'} handleChangeProps={setSortDirection}/>
            <SelectComponent items={columnNameForSorting} name={'Sorting criteria'} handleChangeProps={setColumnNameForSorting}/>
            <SelectComponent items={equipmentTypes.map(item => item.name)} name={'Equipment types'} handleChangeProps={setFilterType}/>
            <SelectComponent items={brands.map(item => item.title)} name={'Equipment brands'} handleChangeProps={setFilterBrand}/>
       </div>
    )
}

export default EquipmentNavigation