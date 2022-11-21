import { useEffect, useState } from "react";
import { getAllBrands } from "../../api/brandServiceApi";
import { getAllCategories } from "../../api/categoryServiceApi";
import { getAllEquipmentTypes } from "../../api/equipmentTypeServiceApi";
import { IBrandType } from "../../types/brand";
import { ICategoryType } from "../../types/category";
import { IEquipmentType } from "../../types/equipmentType";
import { SORT_DIRECTION_ASCENDING, SORT_DIRECTION_DESCENDING } from "../../utils/consts";
import SelectComponent from "../Select/Select"

const EquipmentNavigation = ({setColumnNameForSorting, setSortDirection, setFilterType, setFilterBrand, setFilterCategory}: any) =>{

    const [brands, setBrands] = useState<IBrandType[]>([])
    const [equipmentTypes, setequipmentTypes] = useState<IEquipmentType[]>([])
    const [categories, setCategories] = useState<ICategoryType[]>([])

    const columnNameForSorting: string[] = ['Price', 'Year']
    const sortingValue: string[] = [ SORT_DIRECTION_ASCENDING, SORT_DIRECTION_DESCENDING]

    useEffect(()=>{
        const fetchData = async () =>{
            let brandsResult = await getAllBrands()
            setBrands(brandsResult.data)

            let equipmentTypesResult = await getAllEquipmentTypes()
            setequipmentTypes(equipmentTypesResult.data)

            let categoriesResult = await getAllCategories()
            setCategories(categoriesResult.data)
        }
        fetchData()
      },[])

    return(
       <div>
            <SelectComponent items={sortingValue} name={'Sorting direction'} handleChangeProps={setSortDirection}/>
            <SelectComponent items={columnNameForSorting} name={'Sorting criteria'} handleChangeProps={setColumnNameForSorting}/>
            <SelectComponent items={categories.map(item => item.name)} name={'Categories'} handleChangeProps={setFilterCategory}/>
            <SelectComponent items={equipmentTypes.map(item => item.name)} name={'Equipment types'} handleChangeProps={setFilterType}/>
            <SelectComponent items={brands.map(item => item.title)} name={'Equipment brands'} handleChangeProps={setFilterBrand}/>
       </div>
    )
}

export default EquipmentNavigation