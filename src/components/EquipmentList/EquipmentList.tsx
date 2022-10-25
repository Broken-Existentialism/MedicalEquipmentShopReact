import { Grid } from '@mui/material'
import { IEquipmentItem } from '../../types/types'
import EquipmentItem from './EquipmentItem/EquipmentItem'


const equipmentItems: IEquipmentItem[] = [
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
    {
        Id: 1,
        Name: "SomeName",
        Year: 2018,
        Price: 230000,
        Brand: "SomeBrand",
        Type: "SomeType",
        Img: "SomeImg",
    },
]

const EquipmentList = () =>{
    return(
        <Grid container spacing={1.5}>
           {
                equipmentItems.map((item, index) => 
                    <EquipmentItem 
                        key={index} 
                        Id={item.Id}
                        Name={item.Name}
                        Year={item.Year}
                        Price={item.Price}
                        Brand={item.Brand}
                        Type={item.Type}
                        Img={item.Img}
                        />)
           }
        </Grid>
    )
}

export default EquipmentList