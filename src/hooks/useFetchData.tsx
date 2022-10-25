import { IEquipmentItem } from "../types/types"
import { useEffect, useState } from "react"
import axios from 'axios';

interface IApiResponce{
    data: IEquipmentItem[]
    loading: boolean
    error: any
}

const useFetchData = (url: string): IApiResponce =>{

    const [equipment, setEquipment] = useState<IEquipmentItem[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(()=>{

        const fetchData = async () =>{
            setLoading(true)
            try{
                let result = await axios.get(url)
                setEquipment(result.data.items)
            }
            catch(error){
                setError(error)
            }
            setLoading(false)
        }
    
        fetchData()
      },[url])

    return {data: equipment, loading: loading, error: error}
}

export default useFetchData